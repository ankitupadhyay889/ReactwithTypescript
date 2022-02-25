import React, { useState } from 'react';
import { createContext } from 'vm';

const theme = createContext({background: "black" , color: "white"})
const themes = {
    red: {background: "white" , color: "red"},
    light: {background: "white" , color: "gray"},
    dark: {background: "black" , color: "white"},
}

const A = () => {

    const [them, setthem] = useState(themes)

    return (
        <div>
            <theme.provider value={them}>
                
            </theme.provider>
        </div>
    );
};

export default A;
export {theme};