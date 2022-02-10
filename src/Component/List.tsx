import React, { Component } from 'react'

type Listpro = {
    name: string;
    address: string;
    phonenumber: number;
}

export default class extends Component<Listpro> {
  render() {
    return (
      <div>
          <li> {this.props.name} </li>
          <li> {this.props.address} </li>
          <li> {this.props.phonenumber} </li>
      </div>
    )
  }
}
