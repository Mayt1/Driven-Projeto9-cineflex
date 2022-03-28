import axios from 'axios';

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import './Shedule.css'

export default function Schedule() {
    const { idFilmes } = useParams();

    console.log(idFilmes);

    const [movieSchedule, setMovieSchedule] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilmes}/showtimes`);
        promise.then(response => {
            const { data } = response;
            console.log("terminei a requisiçao das sessoes", data)
            setMovieSchedule(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);

    if(movieSchedule.length !== 0){
        const session = [...movieSchedule.days]
        console.log(movieSchedule.days)
        return (
            <>
                    <div className="Shedule-instruction">
                        <h1>Selecione o horário</h1>
                    </div>
                    <div className="Shedule-movies">
                        {
                            session.map(movieSession => {
                                const { id, weekday, date, showtimes } = movieSession;
                                return <div className="Shedule-movie" key={id}>
                                    <p>{weekday} - {date}</p>
                                    <div className='Shedule-buttons'>
                                        {showtimes.map(sessionHour => {
                                            const { id, name } = sessionHour;
                                            return <Link to={`/assentos/${id}`}> <button>{name}</button> </Link>
                                        })}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </>
        );
    }
    return (
        <>
        </>
    );
}