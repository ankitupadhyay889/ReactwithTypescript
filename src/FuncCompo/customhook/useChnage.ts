import React, { useState } from 'react';

const useChnage = (iV: boolean): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {

    const [chan, setchan] = useState(iV || false)
    const toh = () => setchan(!chan);
    return [chan , toh , setchan];

}

export default useChnage;