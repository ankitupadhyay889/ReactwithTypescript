import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TextField , IconButton } from '@mui/material';

const geLoci = () => {
    let list = localStorage.getItem('mytodo');
    console.log("list");
    if(list){
        return JSON.parse(localStorage.getItem("mytodo") || "{}")
    }else{
        return [];
    }
    
}

const Newtodo = () => {

    const [input, setinput] = useState<string | number>("")
    const [show, setshow] = useState<Array<any>>(geLoci())
    
    // const [show, setshow] = useState<string[]>([])
    const [toog, settoog] = useState<boolean>(true)
    const [edit, setedit] = useState<string | number>("")

    const add = () => {
        if(!input){
            alert("Please fill the input first");
        }else if(input && !toog){
            setshow(
                show.map((elew) => {
                    if(elew.id === edit){
                        return{ ...elew , input: input }
                    }
                    return elew;
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
    const edi = (ine: number) => {
        let newEd = show.find((ele) => {
            return ele.id === ine
        })
        console.log(newEd);
        setinput(newEd.input)
        setedit(ine);
        settoog(false);
    }

    //! LocalStorage
    useEffect(() => {
        localStorage.setItem("mytodo" , JSON.stringify(show))
    }, [show])
     

    return (
        <div className='App'>
            <h1 className='lp'> *****-------------Todo List App-------------***** </h1>
            <TextField id="standard-basic" label="Enter Name" variant="outlined" value={input} onChange={(e) => setinput(e.target.value)} />
            {
                toog ? <IconButton onClick={add}> <AddIcon /> </IconButton> : <IconButton onClick={add}> <EditIcon /> </IconButton>
            }

            <br/><br/>

            <div>
                {
                    show.map((Curele) => {
                        return(
                            <div key={Curele.id} className="ko">
                                <div>
                                    <ol> {Curele.input} <IconButton onClick={() => edi(Curele.id)}> <EditIcon /> </IconButton>
                                    <IconButton onClick={() => del(Curele.id)}> <DeleteOutlineIcon /> </IconButton> </ol>
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