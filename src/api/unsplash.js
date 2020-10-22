import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vzz2a783zF8hTVJ5itXAK986cU6eFWf6FtbC6ie0o2o'
    }
});