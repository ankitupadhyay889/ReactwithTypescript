import React from 'react';

type Eve = {
    haC: (event: React.MouseEvent<HTMLButtonElement> , id: number) => void
}

const Eventprop = (props:Eve) => {
    return (
        <div>
            <button onClick={(evet) => props.haC(evet , 1) } > Click </button>
        </div>
    );
};

export default Eventprop;