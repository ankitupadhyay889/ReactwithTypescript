// ! Class component without state.

import { Component } from 'react'


type TitleProps = {
    title: string;
}

export default class Newo extends Component<TitleProps,{}> {
  render() {
      const {title} = this.props //! you write this or
    return (
      <>
        <h1>{title}</h1>
        {/* <h1> {this.props.title} </h1> */}
      </>
    )
  }
}