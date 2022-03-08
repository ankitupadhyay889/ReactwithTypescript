import React, { useEffect, useState } from 'react';
import axios,{AxiosResponse} from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

type Sma = {
    title: string;
    image?: string;
    description: string;   
}

const ApiCall = () => {

    const [covid, setcovid] = useState<Sma[]>([])    

    const getCovid = () => {
        axios.get("https://fakestoreapi.com/products").then((res: AxiosResponse) => {
            console.log(res.data);
            setcovid(res.data);
        })
    }

    useEffect(() => {
      getCovid()
    }, [])
    

    return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    covid.map((item , id: number) => {
                        return(
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={item.image} alt="im" />
                                </ListItemAvatar>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                        )
                    })
                }   
            </List>     
    );
};

export default ApiCall;