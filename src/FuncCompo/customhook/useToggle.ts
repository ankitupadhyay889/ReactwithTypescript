import React, { useState } from 'react';

const useToggle = (inV: boolean): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {

    const [isTog, setTog] = useState(inV || false);
    const onTog = () => setTog(!isTog);
    return [isTog , onTog , setTog]
};

export default useToggle;