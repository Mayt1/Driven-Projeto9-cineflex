import axios from 'axios';

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import './Reservation.css'

export default function Reservation() {
    const { idSessao } = useParams();

    console.log(idSessao);

    const [movieReservation, setMovieReservation] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            const { data } = response;
            console.log("terminei a requisiçao das reservas", data)
            setMovieReservation(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);

    if (movieReservation.length !== 0) {
        const seats = [...movieReservation.seats]
        return (
            <>
                <section className="Reservation-instruction">
                    <h1>Selecione o(s) assentos(s)</h1>
                </section>
                <section className="Reservation-seats">
                    {
                        seats.map(seat =>{
                            const {id, name, isAvailable} = seat
                            return <div className='Reservation-seat' key={id}>
                                <p>{name}</p>
                            </div>
                        })
                    }
                </section>
                <section className='Reservation-sumary'>
                    <div className='Reservation-sumary-types'>
                        <div className='selecionado'></div>
                        <p>Selecionado</p>
                    </div>
                    <div className='Reservation-sumary-types'>
                        <div className='disponivel'></div>
                        <p>Disponível</p>
                    </div>
                    <div className='Reservation-sumary-types'> 
                        <div className='indisponivel'></div>
                        <p>Indisponível</p>
                    </div>
                </section>
                <section className='Reservation-form'>
                    <div className='Reservation-form-data'>
                        <label>Nome do comprador:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome..."/>
                    </div>
                    <div className='Reservation-form-data'>
                        <label>CPF do comprador</label>
                        <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF..."/>
                    </div>
                    <Link to={`/sucess`}><input type="submit" value="Reservar Assento(s)"/></Link>
                </section>
            </>
        );
    }
    return (
        <>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
            <p>BORA</p>
        </>
    );
}

/**const session = [...movieSchedule.days]
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
        ); */