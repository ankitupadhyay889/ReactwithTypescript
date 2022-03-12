import React, { Component } from 'react'

type Listpro = {
    address:{
      city: string;
      pincode: number;
    },
    name:Array<any>, // ye jo any hai mtlb string number bollean kuch bhi lelo agar any ki jagah <string | number> toh arr m string
    lists:{
    name: string;
    pnumber: number;
    }[]
}

export default class Listtyp extends Component<Listpro> {
  render() {
    return (
      <div>
          <li> {this.props.lists[0].name} </li>
          <li> {this.props.lists[0].pnumber} </li>
          <br/>
          <br/>
          <ul> {this.props.address.city} </ul>
          <ul> {this.props.address.pincode} </ul>
          <br/>
          <br/>
          <li> {this.props.name[0]} -- {this.props.name[1]} -- {this.props.name[2]} </li>
      </div>
    )
  }
}