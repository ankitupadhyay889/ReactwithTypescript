import React from 'react';
import { Button } from "@mui/material";
import useToggle from "./useToggle";

const Second = () => {

    const [isTog , setTog] = useToggle(false)

    const op = () => {
        setTog();
    }
    return (
        <div>
            <h3>{isTog ? "true" : "false"}</h3>
            <Button variant="contained" color="primary" onClick={op}>
                Toggle
            </Button>
        </div>
    );
};

export default Second;