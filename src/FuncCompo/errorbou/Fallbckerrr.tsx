import React from 'react';

type Erpop = {
    error?: Error;
    resetErrorBoundary?: () => void
}

const Fallbckerrr = (props: Erpop) => {
    return (
        <div>
            <p> Something went wrong: </p>
            <pre>{props?.error?.message}</pre>
            <button onClick={props.resetErrorBoundary}>Try Again</button>
        </div>
    );
};

export default Fallbckerrr;