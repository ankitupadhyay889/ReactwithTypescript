import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("other-root") as HTMLElement;
// assuming in your html file has a div with id 'modal-root';

export class Demo extends React.Component {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}