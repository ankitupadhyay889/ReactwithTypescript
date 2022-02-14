import React from 'react';
import Eventprop from './Eventprop';
import Inpt from './Inpt';
import Styl from './Styl';
// import Advanceprop from './Advanceprop';

const Calling = () => {
    return (
        <div>
            {/* <Advanceprop status='error'> Ankit </Advanceprop> */}
            <Eventprop haC={(event , id) => {console.log(event , id);
            }} />

            <Inpt value='' />

            <Styl />
        </div>
    );
};

export default Calling;