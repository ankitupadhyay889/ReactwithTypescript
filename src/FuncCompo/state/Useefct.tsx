import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Smka = {
    country: string;
    tests: string | number;
    active: string | number;
    recovered: string | number;
    deaths: string | number;
}

const Useefct = () => {
    
    const [load, setload] = useState<boolean>(true);
    const [data, setdata] = useState<Smka[]>([]);

    const getDa = async() => {
        const res = await fetch('https://disease.sh/v3/covid-19/countries')  
        const da = await res.json()  
        setdata(da)
        setload(false)    
    }

    useEffect(() => {
        getDa();
    }, [])

    return (
        <div>
            <TableContainer>
                <Table>
                <TableHead>
                <TableRow>
                <TableCell>Country </TableCell>
                <TableCell>Death </TableCell>
                <TableCell>Recovered </TableCell>
                <TableCell>Active </TableCell>
                <TableCell>Test </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                load?<h2>Loading...</h2>:data.map((item,i: number)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell> {item.country} </TableCell>
                            <TableCell> {item.deaths} </TableCell>
                            <TableCell> {item.recovered} </TableCell>
                            <TableCell> {item.active} </TableCell>
                            <TableCell> {item.tests} </TableCell>
                        </TableRow>
                    )
                })
                }
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};


export default Useefct;