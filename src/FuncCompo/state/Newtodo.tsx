import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TextField , IconButton } from '@mui/material';

const Newtodo = () => {

    const [input, setinput] = useState<string>("")

    const [show, setshow] = useState<Array<any>>([])
    
    // const [show, setshow] = useState<string[]>([])

    const add = () => {
        if(!input){
            alert("Please fill the input first")
        }else{
            const sbhidata = { id: new Date().getTime().toString() , input: input }
            setshow([...show , sbhidata]);
            setinput("")
        }
    }    

    //! Delete The List Item 
    const del = (index: number) => {
        const updat = show.filter((ele) => {
            return index !== ele.id;
        })
        setshow(updat);
    }

    //! Edit The List Item
    const edi = (ine: number) => {
        let newEd = show.find((ele) => {
            return ele.id === ine
        })
        console.log(newEd);
    }

    return (
        <div className='App'>
            <h1 className='lp'> *****-------------Todo List App-------------***** </h1>

            <TextField id="standard-basic" label="Enter Name"
            variant="outlined" value={input} 
            onChange={(e) => setinput(e.target.value)}/>
            <IconButton onClick={add}> <AddIcon /> </IconButton>

            <br/><br/>

            <div>
                {
                    show.map((ele: any) => {
                        return(
                            <div key={ele.id} className="Ko">
                                <div>
                                    <ol> {ele.input} <IconButton onClick={() => edi(ele.id)}> <EditIcon /> </IconButton>
                                    <IconButton onClick={() => del(ele.id)}> <DeleteOutlineIcon /> </IconButton> </ol>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Newtodo;