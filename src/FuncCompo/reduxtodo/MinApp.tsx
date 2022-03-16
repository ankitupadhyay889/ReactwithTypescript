import { Button, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { addTo, delTo, remvTo} from './action/actionperfom';
import { useDispatch, useSelector } from 'react-redux';

const MinApp = () => {

    const [input, setinput] = useState<string>("");
    const list = useSelector((state: any) => state.toDo.list);
    const dispatch = useDispatch<any>();

    const deoa = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value);
    }

    return (
        <>
        <div>
            <figure>
                <figcaption> Add Your List ✌ </figcaption>
            </figure>
            <TextField id="standard-basic" label="✍ Add Item" variant="standard" value={input} onChange={deoa} />
            <IconButton> <AddIcon onClick={() => dispatch(addTo(input), setinput(""))} /> </IconButton>
        </div>
        {
            list.map((elem: any) => {
                return(
                    <div className="ko" key={elem.id}>
                        <ol> {elem.data} <IconButton onClick={() => dispatch(delTo(elem.id))}> <DeleteOutlineIcon /> </IconButton></ol>
                    </div>
                )
            })
        }
        <br/><br/>
        <div>
            <Button onClick={() => dispatch(remvTo())}> Remove All </Button>
        </div>
        </>
    );
};

export default MinApp;