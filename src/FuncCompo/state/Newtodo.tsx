import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TextField , IconButton } from '@mui/material';

const Newtodo = () => {

    const [input, setinput] = useState<String>("")

    const [show, setshow] = useState<Array<any>>([])
    
    // const [show, setshow] = useState<string[]>([])

    const [toog, settoog] = useState<boolean>(true)

    const [edit, setedit] = useState<string>("")

    const add = () => {
        if(!input){
            alert("Please fill the input first")
        }else if(input && !toog){
            setshow(
                show.map((ele) => {
                    if(ele.id === edit){
                        return{ ...ele , input: input }
                    }
                    return ele;
                })
            )
            setinput("")
            setedit("");
            settoog(true);
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
    const edi = (ine: any) => {
        let newEd = show.find((ele) => {
            return ele.id === ine
        })
        console.log(newEd);
        setinput(newEd.input)
        setedit(ine);
        settoog(false);
    }

    return (
        <div className='App'>
            <h1 className='lp'> *****-------------Todo List App-------------***** </h1>

            <TextField id="standard-basic" label="Enter Name"
            variant="outlined" value={input} 
            onChange={(e) => setinput(e.target.value)} />
            {
                toog ? <IconButton onClick={add}> <AddIcon /> </IconButton> : <IconButton onClick={add}> <EditIcon /> </IconButton>
            }

            <br/><br/>

            <div>
                {
                    show.map((ele: any) => {
                        return(
                            <div key={ele.id} className="ko">
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