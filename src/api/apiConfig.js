const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5ea49b8c64de70eb0918b0e57e387c29',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;