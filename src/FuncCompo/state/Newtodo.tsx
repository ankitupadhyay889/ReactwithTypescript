import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TextField , IconButton } from '@mui/material';
import "../App.css"

const Newtodo = () => {

    const [input, setinput] = useState<string>("")
    // const [show, setshow] = useState<Array<any>>([])
    const [show, setshow] = useState<string[]>([])

    const add = () => {
        if(!input){

        }else{
            setshow([...show , input]);
            setinput("")
        }
    }    

    const del = (id:number) => {
        const updat = show.filter((ele , ind) => {
            return ind !== id;
        })
        setshow(updat);
    }

    return (
        <div>
            <h1> *****-------------Todo List App-------------***** </h1>
            <TextField id="standard-basic" label="Enter Name" variant="standard" value={input} onChange={(e) => setinput(e.target.value)} />
            <IconButton onClick={add}> <AddIcon /> </IconButton>

            <br/><br/>

            <div>
                {
                    show.map((ele:string , ind:number) => {
                        return(
                            <div key={ind} className="Ko">
                                <li> {ele} <IconButton onClick={() => del(ind)}> <DeleteOutlineIcon /> </IconButton> </li>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Newtodo;