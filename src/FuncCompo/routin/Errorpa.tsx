import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Errorpa = () => {

    const Location = useLocation()

    const history = useNavigate();
    const pick = () => {
        history("/")
    }

    return (
        <div>
            <h1> Opps! This URL is not found : {Location.pathname} </h1>
            <button onClick={pick}> Go Back to Home </button>
        </div>
    );
};

export default Errorpa;