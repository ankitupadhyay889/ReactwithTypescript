import React, { useState } from 'react';
import { Button } from "@mui/material";
import useChnage from './useChnage';

const Third = () => {

    const [chan , setchan] = useChnage(false)
    const op = () => {
        setchan();
    }

    return (
        <div>
            <h3>{chan}</h3>
            <Button variant="contained" color="primary" onClick={op}>
                Toggle
            </Button>
        </div>
    );
};

export default Third;