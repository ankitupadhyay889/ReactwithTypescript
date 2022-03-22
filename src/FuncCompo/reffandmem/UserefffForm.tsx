import React, { useRef, useState } from 'react';

const UserefffForm = () => {

    const luname = useRef<HTMLInputElement>(null)
    const [show, setshow] = useState<boolean>(false);

    const Op = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(luname.current?.value);
        const data = luname.current?.value;
        data === "" ? alert("Please fill data first") : setshow(true);
    }

    return (
        <div>
            <form onSubmit={Op}>
                <div>
                    <label htmlFor="name"> Enter your name </label>
                    <input type="text" ref={luname} />
                </div>
                <br/>
                <button type='submit'> Submit </button>
            </form>
            <p> {show ? `Your Name is ${luname.current?.value}` : " "} </p>
        </div>
    );
};

export default UserefffForm;