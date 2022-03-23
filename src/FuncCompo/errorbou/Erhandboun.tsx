import React, { useState } from 'react';
import Usercom from './Usercom';

const Erhandboun = () => {

    const [Hnagle, setHnagle] = useState<boolean>(false);

    return (
        <div>
            {/* {Hnagle ? <Usercom /> : null} */}
            <button onClick={() => setHnagle(true)}> UserErrr </button>
        </div>
    );
};

export default Erhandboun;