import axios from 'axios';

const tmdbConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'cb0b75ca63b9e838b2e256a8843a183a'
};

export const tmdb = axios.create({baseURL: tmdbConfig.baseUrl, params: {api_key: tmdbConfig.apiKey}});