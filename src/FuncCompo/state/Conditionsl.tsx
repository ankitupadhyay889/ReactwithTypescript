import React from 'react';
import {useQuery} from 'react-query';

const fetU = async () => {
    await new Promise((re) => setTimeout(re , 1000));
    return "Data";
}

const Conditionsl = () => {

    const {data , isError , isFetching} = useQuery

    return (
        <div>
            
        </div>
    );
};

export default Conditionsl;