import React, { useEffect, useState } from 'react';
import axios,{AxiosResponse} from "axios";
import List from '@mui/material/List';
import { Button } from '@mui/material';

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
        <>
        <div>
            <button className="mdc-button foo-button">
  <div className="mdc-button__ripple"></div>
  <span className="mdc-button__label">Button</span>
</button>
<Button>Button</Button>

        </div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    covid.map((item , id: number) => {
                        return(
                            <>
                                <ul className="mdc-list" key={id}>
                                <li className="mdc-image-list__item">
                                    <div className="mdc-image-list__image-aspect-container">
                                    <img className="mdc-image-list__image" src={item.image} alt="io"/>
                                    </div>
                                    <div className="mdc-image-list__supporting">
                                    <span className="mdc-image-list__label">{item.title}</span>
                                    </div>
                                </li>
                                </ul>
                            </>
                        )
                    })
                }   
            </List>   
        </>      
    );
};

export default ApiCall;

                            /* <ListItem key={id}>
                                <ListItemAvatar>
                                    <Avatar src={item.image} alt="im" />
                                </ListItemAvatar>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem> 
                            */