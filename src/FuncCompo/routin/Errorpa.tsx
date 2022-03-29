import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpa = () => {
    return (
        <div>
            <h1> Opps! Page Not Found </h1>
            <NavLink to="/"> Go back </NavLink>
        </div>
    );
};

export default Errorpa;