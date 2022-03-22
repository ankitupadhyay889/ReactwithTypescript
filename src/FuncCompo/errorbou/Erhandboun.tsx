import React, { useState } from 'react';
import City from './City';
// import Usercom from './Usercom';

const Erhandboun = () => {

    const [Hnagle, setHnagle] = useState<boolean>(false);

    return (
        <div>
            {/* {Hnagle ? <Usercom /> : null} */}
            {Hnagle? <City /> : null}
            
            <button onClick={() => setHnagle(true)}> UserErrr </button>
        </div>
    );
};

export default Erhandboun;