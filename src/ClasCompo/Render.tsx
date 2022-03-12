import React, { Component } from 'react'

type Qsa = {
    inde : number
}

type Qpro = {
    quo : string[]
}

export default class Render extends Component<Qpro , Qsa> {

    constructor(props:Qpro) {
      super(props)
      
      this.state = {
         inde:0
      }
    }

    getIn = ():number =>{
        const min: number = 0;
        const max: number = this.props.quo.length - 1
        return Math.floor(Math.random() * (max - min) + min);
    } 

    getNex = () => this.setState(state => ({inde: this.getIn()}));

  render() {
    return (
      <div>
          <h1> RenderComponent </h1>
          <button onClick={this.getNex}>NEXT QUOTE</button>
      </div>
    )
  }
}
