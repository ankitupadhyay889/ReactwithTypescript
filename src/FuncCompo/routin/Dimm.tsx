import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Dimm = () => {

  const location = useLocation();
  const state = location.state as any

  return (
    <div>
        <h1> Recevier </h1>
        <p> From : {state.from} </p>        
        <p> Message : {state.message} </p>
        <p> Timestamp : {state.timestamp} </p>
        <p> Age : {state.age} </p>
        <p> Id : {state.id}</p>
        <p> Price : {state.price}</p>
        <hr />
        <Link to="/datalink">Go Home</Link>
    </div>
  );
};

export default Dimm;