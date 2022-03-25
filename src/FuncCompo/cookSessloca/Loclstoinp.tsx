import React, { useEffect, useState } from 'react';

const getD = () => {
    const saved = sessionStorage.getItem("name");
    if(saved){
        return JSON.parse(sessionStorage.getItem("name") || "");
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
        // storing input names
        sessionStorage.setItem("name", JSON.stringify(name));
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