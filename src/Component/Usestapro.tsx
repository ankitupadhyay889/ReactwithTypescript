import React, { Component } from 'react'

type MainState = {
    name: string;
    email: string;
}

type MainProp = {
    category: string;
}

export default class Usestapro extends Component<MainProp , MainState> {
    constructor(props:MainProp) {
      super(props)
        this.state = {
         name: "Ankit",
         email: "ankit@gmail.com"
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
