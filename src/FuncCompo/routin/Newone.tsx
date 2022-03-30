import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Newone = () => {

  const datasen = useNavigate();
  const databehjo = () => {
    datasen("/dimm" , {state: {id:1 , name: "Ankit" , age:22 }})
  }

  return (
    <div>
        <h1>New Page</h1>
        <Button onClick={databehjo}>Go To Recevier</Button>
    </div>
  );
};

export default Newone;