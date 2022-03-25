import React, { useEffect, useState } from 'react';
import Button from '../custcompo/Button';

const geLocki = () => {
    let data = localStorage.getItem('meeto');
    console.log("data");
    if(data){
        return JSON.parse(localStorage.getItem("meeto") || "{}")
    }else{
        return [];
    }
}

const Lcalsto = () => {

    const [inp, setinp] = useState<string>("")
    const [sho, setsho] = useState<Array<any>>(geLocki())

    const add = () => {
        if(!inp){
            alert("please fill the data first");
        }else{
            setsho([...sho , inp]);
            setinp("");
        }
    }

    const remall = () => {
        setsho([]);
    }

    const del = (id: number) => {
        const updat = sho.filter((ele , ind) => {
            return ind !== id;
        })
        setsho(updat);
    }

    //! LocalStorage
    useEffect(() => {
        localStorage.setItem("meeto" , JSON.stringify(sho))
    }, [sho])

    return (
        <div>
            <input value={inp} onChange={(e) => setinp(e.target.value)} />
            <Button border="none" color="Green" height="25px" width="60px" radius="5%" onClick={add} children = "Add"/>

            <br/><br/>

            <div>
                {
                    sho.map((ele , ind) => {
                        return(
                            <>
                            <div key={ind}>
                                <p> {ele} <Button border="none" color="Red" height="25px"
                                 width="60px" radius="5%" onClick={() => del(ind)} children = "Del"/></p>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            
            <Button border="none" color="Red" height="25px" width="60px" radius="5%" onClick={remall} children = "Remove"/>
        </div>
    );
};

export default Lcalsto;