import React, { useReducer } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from '@mui/material';

type Isis = {
    cout: number;
}

const initV: Isis = {cout: 0};

function reduc(state: Isis , action: any){
    switch(action.type){
        case "incre":
            return {cout: state.cout + 1}
        case "decre":
            return {cout: state.cout - 1}
        default:
            return {cout: state.cout}
    }
}

const UseRedu = () => {

    const [coutstate, dispatch] = useReducer(reduc , initV)

    const Ino = () => {
        dispatch({type : "incre"})
    }

    const Dno = () => {
        if(coutstate.cout > 0){
            dispatch({type : "decre"})
        }
    }

    return (
        <div>
            <h2> useReducer Hook </h2>
            <br/>
            <IconButton onClick={Ino}> <AddBoxIcon /> </IconButton>
            <h2> {coutstate.cout} </h2>
            <IconButton onClick={Dno}> <RemoveCircleIcon /> </IconButton>
        </div>
    );
};

export default UseRedu;