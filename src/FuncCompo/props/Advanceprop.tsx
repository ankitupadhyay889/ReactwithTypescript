import React from 'react';

type CheckSta = {
    status: 'loading' | 'success' | 'error',
    children: string
}

// match hona chaie bas

const Advanceprop = (props: CheckSta) => {

    let message
    if(props.status === "loading"){
        message = "Loading"
    }else if(props.status === "success"){
        message = "Data Fetch Successfully"
    }else if(props.status === "error"){
        message = "Error in fetching data"
    }

    return (
        <div>
            <h1> Status - {message} </h1>
            <h1> {props.children} </h1>
        </div>
    );
};

export default Advanceprop;