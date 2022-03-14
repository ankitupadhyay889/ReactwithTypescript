import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNu , deccNu} from "./actions/indexx";

const Mainapp = () => {

    const myState = useSelector((state: any) => state.changeThe);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <p onClick={() => dispatch(deccNu())}><span> - </span></p>
                <h1> {myState} </h1>
                <p onClick={() => dispatch(incNu(5))}><span> + </span></p>
            </div>
        </div>
    );
};

export default Mainapp;