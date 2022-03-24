import React from 'react';
import "../../App.css";
import ReactDom from "react-dom";

type Ipor = {
  open: boolean;
  children: React.ReactNode
  onClose: () => void
}

const Demo = (props: Ipor) => {

  if(!props.open) return null

  return ReactDom.createPortal(
    <>
    <div>
      <button onClick={props.onClose}> Close Modal </button>
      {props.children}
    </div>
    </>,
    document.getElementById("other-root") as HTMLElement
  );
};

export default Demo;