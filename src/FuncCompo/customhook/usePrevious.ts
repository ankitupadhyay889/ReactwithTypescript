import React, { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T) => {
    const ref = useRef(value);
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return [ref.current];
};

export default usePrevious;

// T is type of hook.