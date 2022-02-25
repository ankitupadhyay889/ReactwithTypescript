import React, { useRef, useState } from 'react';

const UserefffForm = () => {

    const luname = useRef<HTMLInputElement>(null)

    const [show, setshow] = useState(false);

    const Op = () => {
        const sjo = luname.current?.value;
        sjo === "" ? alert("please fill the data") : setshow(true);
    }

    return (
        <div>
            <form onSubmit={Op}>
                <div>
                    <label htmlFor='name'> Enter your name </label>
                    <input type="text" ref={luname} />
                </div>
                <br/>
                <button type='submit'> Submit </button>
            </form>
            <p> {show ? `Your name is ${luname.current?.value}` : ""} </p>
        </div>
    );
};

export default UserefffForm;