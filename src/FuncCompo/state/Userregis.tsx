import React, { ChangeEvent, useState } from 'react';

const Userregis = () => {

    const [useRegis, setuseRegis] = useState({
        fname: "",
        lname: "",
        email: "",
    })

    const [store, setstore] = useState<Array<any>>([])

    const hanInp = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value;

        setuseRegis({...useRegis , [name] : value})
    }

    const subKa = (e: any) => {
        e.preventDefault();
        const all = {...useRegis};
        setstore([...store , all]);
        setuseRegis({fname: "" , lname: "" , email: ""});
    }

    return (
        <div>
            <form onSubmit={subKa}>
                <label htmlFor="username">FirstName : </label>
                <input type="text" name="fname" autoComplete="off" value={useRegis.fname} onChange={hanInp} />
                
                <br/><br/>

                <label htmlFor="email">LastName : </label>
                <input type="text" name="lname" autoComplete="off" value={useRegis.lname} onChange={hanInp} />

                <br/><br/>

                <label htmlFor="password">Email : </label>
                <input type="text" name="email" autoComplete="off" value={useRegis.email} onChange={hanInp} />

                <br/><br/>

                <button type="submit"> Register </button>

            </form>

            <div>
                {
                    store.map((curElem , id: number) => {
                        const {fname , lname , email} = curElem
                        return(
                            <div key={id}>
                                <h1> {fname} </h1>
                                <h1> {lname} </h1>
                                <h1> {email} </h1>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Userregis;