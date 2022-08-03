import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

// Defining CORS options
const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    optionsSuccessStatus: 200,
}

// Load environment variables
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const app = express();
app.use(cors(corsOptions));

app.get('/api/popular', (req, res) => {
    const popularMovies = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`)
        .then(data => res.send(data.data.results))
        .catch(err => console.log(err));
});

app.get('/api/search/:query', (req, res) => {
    const query = req.params.query;
    if (query.length > 0) {
        const searchResults = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&include_adult=false`)
            .then(data => {res.send(data.data.results);})
            .catch(err => {console.log(err); res.send(err)});
    } else {
        res.status(400).send('Query is empty');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});