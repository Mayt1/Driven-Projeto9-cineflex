import axios from 'axios';

import { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import './Reservation.css'

export default function Reservation() {
    const { idSessao } = useParams();

    console.log(idSessao);

    return (
        <>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
            <p>BORA RESERVAR</p>
        </>
    );
}
