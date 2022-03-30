import { useLocation } from "react-router-dom";

const Dimm = () => {

  const location = useLocation();
  const state = location.state as any

  return (
    <div>
        <h1> Recevier </h1>
        
        <p> {state.name} </p>
        <p> {state.age} </p>
        <span>{state.id}</span>
        <span>{state.name}</span>
        <span>{state.price}</span>
    </div>
  );
};

export default Dimm;