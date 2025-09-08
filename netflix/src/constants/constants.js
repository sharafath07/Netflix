export const baseUrl = "https://api.themoviedb.org/3";
export const API_KEY = 'b5f6ca5cf292e4018956ddec057af369';
export const imageUrl = 'https://image.tmdb.org/t/p/original';



export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const trending =`/trending/all/week?api_key=${API_KEY}&language=en-US`;