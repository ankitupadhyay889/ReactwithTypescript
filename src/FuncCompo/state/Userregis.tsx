import React, { useState } from 'react';

const Userregis = () => {

    const [useRegis, setuseRegis] = useState({
        fname: "",
        lname: "",
        email: "",
    })

    const hanInp = () => {}

    const subKa = () => {}

    return (
        <div>
            <form onSubmit={subKa}>
                <label htmlFor="username">FullName : </label>
                <input type="text" name="fname" autoComplete="off" value={useRegis.fname} onChange={hanInp} />
                
                <br/><br/>

                <label htmlFor="email">Email id : </label>
                <input type="text" name="lname" autoComplete="off" value={useRegis.lname} onChange={hanInp} />

                <br/><br/>

                <label htmlFor="password">Password : </label>
                <input type="text" name="email" autoComplete="off" value={useRegis.email} onChange={hanInp} />

                <br/><br/>

                <button type="submit"> Register </button>

            </form>
        </div>
    );
};

export default Userregis;