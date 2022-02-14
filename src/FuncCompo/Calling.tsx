import React from 'react';
import Eventprop from './Eventprop';
// import Advanceprop from './Advanceprop';

const Calling = () => {
    return (
        <div>
            {/* <Advanceprop status='error'> Ankit </Advanceprop> */}
            <Eventprop haC={(event , id) => {console.log(event , id);
            }} />
        </div>
    );
};

export default Calling;