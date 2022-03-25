import React from 'react';
import "../../App.css";
// import ReactDom from "react-dom";

type Ipor = {
  open: boolean;
  children: React.ReactNode
  onClose: () => void
}

const Demo = (props: Ipor) => {

  if(!props.open) return null;

  return(
    <>
    <div>
      <button onClick={props.onClose}> Close Modal </button>
      {props.children}
    </div>
    </>
  );
};
//! portal se style bhi alag ho jata hai right hand side ho jata hai or bina portal ek k neeche ek normal jaise hota hai 
export default Demo;