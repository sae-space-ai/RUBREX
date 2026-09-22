// ============================================================
// RUBREX - Integración de APIs Gratuitas y Seguras
// ============================================================

// ============================================
// 1. IMSLP API - Partituras de Dominio Público
// ============================================

export interface IMSLPWork {
  id: string;
  title: string;
  composer: string;
  url: string;
  score_url?: string;
}

/**
 * Busca partituras en IMSLP (International Music Score Library Project)
 * Todas las partituras son de dominio público
 */
export const searchIMSLP = async (query: string): Promise<IMSLPWork[]> => {
  try {
    // IMSLP no tiene API oficial pública, usamos su búsqueda web
    // En producción, se recomienda usar un proxy backend
    const response = await fetch(
      `https://imslp.org/index.php?title=Special:Search&profile=default&search=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      console.warn('IMSLP search failed');
      return [];
    }
    
    // Parsear resultados (en producción, usar un backend para esto)
    // Por ahora, retornamos estructura vacía
    return [];
  } catch (error) {
    console.error('IMSLP API error:', error);
    return [];
  }
};

/**
 * Obtiene información de una obra específica en IMSLP
 */
export const getIMSLPWork = async (workId: string): Promise<IMSLPWork | null> => {
  try {
    const response = await fetch(`https://imslp.org/wiki/${workId}`);
    if (!response.ok) return null;
    
    // Parsear información de la obra
    return {
      id: workId,
      title: '',
      composer: '',
      url: `https://imslp.org/wiki/${workId}`
    };
  } catch (error) {
    console.error('IMSLP get work error:', error);
    return null;
  }
};

// ============================================
// 2. MusicBrainz API - Metadatos Musicales
// ============================================

export interface MusicBrainzArtist {
  id: string;
  name: string;
  sort_name: string;
  country?: string;
  life_span?: {
    begin?: string;
    end?: string;
  };
}

export interface MusicBrainzWork {
  id: string;
  title: string;
  type?: string;
  relations?: any[];
}

/**
 * Busca compositores en MusicBrainz
 */
export const searchMusicBrainzArtist = async (name: string): Promise<MusicBrainzArtist[]> => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(name)}&fmt=json&limit=10`,
      {
        headers: {
          'User-Agent': 'RUBREX/1.0 (https://github.com/tu-usuario/rubrex)'
        }
      }
    );
    
    if (!response.ok) {
      console.warn('MusicBrainz search failed');
      return [];
    }
    
    const data = await response.json();
    return data.artists || [];
  } catch (error) {
    console.error('MusicBrainz API error:', error);
    return [];
  }
};

/**
 * Obtiene información detallada de un compositor
 */
export const getMusicBrainzArtist = async (artistId: string): Promise<MusicBrainzArtist | null> => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/${artistId}?fmt=json`,
      {
        headers: {
          'User-Agent': 'RUBREX/1.0 (https://github.com/tu-usuario/rubrex)'
        }
      }
    );
    
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('MusicBrainz get artist error:', error);
    return null;
  }
};

/**
 * Busca obras de un compositor
 */
export const searchMusicBrainzWorks = async (composerName: string): Promise<MusicBrainzWork[]> => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/work?query=artist:${encodeURIComponent(composerName)}&fmt=json&limit=20`,
      {
        headers: {
          'User-Agent': 'RUBREX/1.0 (https://github.com/tu-usuario/rubrex)'
        }
      }
    );
    
    if (!response.ok) return [];
    const data = await response.json();
    return data.works || [];
  } catch (error) {
    console.error('MusicBrainz works error:', error);
    return [];
  }
};

// ============================================
// 3. Wikipedia API - Información Contextual
// ============================================

export interface WikipediaPage {
  pageid: number;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  fullurl: string;
}

/**
 * Busca información en Wikipedia sobre un compositor o término musical
 */
export const searchWikipedia = async (query: string, lang: string = 'es'): Promise<WikipediaPage[]> => {
  try {
    const response = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*&srlimit=5`
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    const searchResults = data.query?.search || [];
    
    // Obtener extractos de los resultados
    const pageIds = searchResults.map((r: any) => r.pageid).join('|');
    const extractResponse = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&pageids=${pageIds}&prop=extracts|pageimages|info&exintro=true&explaintext=true&inprop=url&format=json&origin=*`
    );
    
    if (!extractResponse.ok) return [];
    
    const extractData = await extractResponse.json();
    const pages = Object.values(extractData.query?.pages || {}) as any[];
    
    return pages.map(page => ({
      pageid: page.pageid,
      title: page.title,
      extract: page.extract || '',
      thumbnail: page.thumbnail,
      fullurl: page.fullurl || `https://${lang}.wikipedia.org/wiki/${page.title}`
    }));
  } catch (error) {
    console.error('Wikipedia API error:', error);
    return [];
  }
};

/**
 * Obtiene el artículo completo de una página de Wikipedia
 */
export const getWikipediaPage = async (title: string, lang: string = 'es'): Promise<WikipediaPage | null> => {
  try {
    const response = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=extracts|pageimages|info&explaintext=true&inprop=url&format=json&origin=*`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const pages = Object.values(data.query?.pages || {}) as any[];
    
    if (pages.length === 0) return null;
    
    const page = pages[0];
    return {
      pageid: page.pageid,
      title: page.title,
      extract: page.extract || '',
      thumbnail: page.thumbnail,
      fullurl: page.fullurl || `https://${lang}.wikipedia.org/wiki/${page.title}`
    };
  } catch (error) {
    console.error('Wikipedia get page error:', error);
    return null;
  }
};

// ============================================
// 4. Free Dictionary API - Glosario Musical
// ============================================

export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
  }[];
}

/**
 * Busca definiciones de términos en el diccionario
 * Útil para el glosario de términos musicales
 */
export const searchDictionary = async (word: string): Promise<DictionaryEntry | null> => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`
    );
    
    if (!response.ok) {
      if (response.status === 404) return null;
      return null;
    }
    
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error('Dictionary API error:', error);
    return null;
  }
};

// ============================================
// 5. YouTube Data API v3 - Vídeos de Referencia
// ============================================

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  url: string;
}

/**
 * Busca vídeos de referencia en YouTube
 * Requiere API Key (gratuita con cuota de 10,000 unidades/día)
 */
export const searchYouTube = async (query: string, apiKey: string): Promise<YouTubeVideo[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=10&key=${apiKey}`
    );
    
    if (!response.ok) {
      console.warn('YouTube API search failed');
      return [];
    }
    
    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
  } catch (error) {
    console.error('YouTube API error:', error);
    return [];
  }
};

/**
 * Obtiene información detallada de un vídeo de YouTube
 */
export const getYouTubeVideo = async (videoId: string, apiKey: string): Promise<YouTubeVideo | null> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    
    if (data.items.length === 0) return null;
    
    const item = data.items[0];
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id}`
    };
  } catch (error) {
    console.error('YouTube get video error:', error);
    return null;
  }
};

// ============================================
// 6. Spotify Web API - Referencias de Audio
// ============================================

export interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}

/**
 * Busca pistas en Spotify (requiere token de acceso)
 * Nota: Requiere autenticación OAuth
 */
export const searchSpotify = async (query: string, accessToken: string): Promise<SpotifyTrack[]> => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    
    return data.tracks.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      preview_url: item.preview_url,
      external_urls: item.external_urls
    }));
  } catch (error) {
    console.error('Spotify API error:', error);
    return [];
  }
};

// ============================================
// 7. Open Weather API - Para eventos al aire libre
// ============================================

export interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  humidity: number;
  wind_speed: number;
}

/**
 * Obtiene datos meteorológicos (útil para eventos al aire libre)
 * Requiere API Key (gratuita)
 */
export const getWeather = async (city: string, apiKey: string): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    
    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed
    };
  } catch (error) {
    console.error('Weather API error:', error);
    return null;
  }
};

// ============================================
// UTILIDADES
// ============================================

/**
 * Obtiene información contextual completa sobre un compositor
 * Combina múltiples APIs
 */
export const getComposerInfo = async (composerName: string) => {
  const [wikipedia, musicbrainz] = await Promise.all([
    searchWikipedia(composerName),
    searchMusicBrainzArtist(composerName)
  ]);
  
  return {
    wikipedia: wikipedia[0] || null,
    musicbrainz: musicbrainz[0] || null
  };
};

/**
 * Busca recursos multimedia para una obra
 */
export const getWorkResources = async (workTitle: string, composerName: string, youtubeApiKey?: string) => {
  const wikipediaPromise = searchWikipedia(`${workTitle} ${composerName}`);
  
  let youtubePromise: Promise<YouTubeVideo[]> = Promise.resolve([]);
  if (youtubeApiKey) {
    youtubePromise = searchYouTube(`${workTitle} ${composerName} clarinet`, youtubeApiKey);
  }
  
  const [wikipedia, youtube] = await Promise.all([wikipediaPromise, youtubePromise]);
  
  return {
    wikipedia: wikipedia[0] || null,
    youtube: youtube || []
  };
};

/**
 * Obtiene definición de un término musical
 */
export const getMusicalTermDefinition = async (term: string) => {
  const [dictionary, wikipedia] = await Promise.all([
    searchDictionary(term),
    searchWikipedia(term)
  ]);
  
  return {
    dictionary: dictionary || null,
    wikipedia: wikipedia[0] || null
  };
};
