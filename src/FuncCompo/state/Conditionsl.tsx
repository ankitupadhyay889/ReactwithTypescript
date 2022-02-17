import React from 'react';
import {useQuery} from 'react-query';

const fetU = async () => {
    await new Promise((re) => setTimeout(re , 1000));
    return "Data";
}

const Conditionsl = () => {

    const {data , isError , isFetching} = useQuery("fetch Data" , fetU)

    const renDat = () => {
        if(isFetching){
            return <div>Data is fetching</div>
        }else if(isError){
            return <div>Error</div>
        }else{
            return <div>{data}</div>
        }
    }

    return (
        <div>
            
        </div>
    );
};

export default Conditionsl;