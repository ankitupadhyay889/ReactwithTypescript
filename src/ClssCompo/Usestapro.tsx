import React, { Component } from 'react'

type MainState = {
    name: string;
    email: string;
}

type MainPrp = {
    category: string;
}

export default class Usestapro extends Component<MainPrp , MainState> {
    constructor(props:MainPrp) {
      super(props)
        this.state = {
         name: "Ankit",
         email: "kiuyo@gmail.com"
      }
    }

    change(emailId:string){
        this.setState({
            email: emailId
        })
    }

  render() {
    return (
      <div>
          {this.state.name} ----- {this.props.category} ----- {this.state.email}

          <button onClick={() => this.change('ak@gmail.com')}> Change email or name </button>
      </div>
    )
  }
}
