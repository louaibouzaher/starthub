export const API_BASEURL =
  process.env.NODE_ENV == 'production'
    ? 'https://starthubapi.herokuapp.com/'
    : 'http://127.0.0.1:8000/'
