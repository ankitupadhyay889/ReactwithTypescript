import React from 'react';

type Eve = {
    haC: (event: React.MouseEvent<HTMLButtonElement> , id: number) => void // or hum return k upper bhi kr skte hai const lga k not important last me dekho
}

const Eventprop = (props:Eve) => {
    return (
        <div>
            <button onClick={(evet) => props.haC(evet , 1) } > ClickEvent </button>
        </div>
    );
};

export default Eventprop;

// const hanC = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event);
// }