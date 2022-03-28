import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

import './Catalog.css'

function Catalog() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            const { data } = response;
            console.log("terminei a requisiçao", data)
            setMovies(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);

    return (
        <>
            <div className="Catalog-instruction">
                <h1>Selecione o Filme</h1>
            </div>
            <div className="Catalog-movies">
                {
                    movies.map(movie => {
                        const { id, title, posterURL, overview, releaseDate } = movie
                        return <div className="Catalog-movie" key={id}>
                            <Link to={`filmes/${id}`}> <img src={posterURL} alt={title} /></Link>
                        </div>
                    })}
            </div>
        </>
    );
}

export default Catalog;
