import React, { useEffect, useState } from 'react';

const getD = () => {
    const saved = localStorage.getItem("name");
    if(saved){
        return JSON.parse(localStorage.getItem("name") || "");
    }else{
        return "";
    }
}

const Loclstoinp = () => {

    const [name, setname] = useState<string | number>(getD())

    const hj = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setname(e.currentTarget.value)
    }

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(name));
    }, [name])
    

    return (
        <div>
            <form>
                <input type="text" value={name} onChange={hj} placeholder="Full name"/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
};

export default Loclstoinp;