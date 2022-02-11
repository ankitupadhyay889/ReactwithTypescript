import React, { Component } from 'react';

type Msa = {
    name: string;
    email: string;
}

type Mpro = {

}

class Event extends Component<Mpro , Msa> {

    constructor(props:Mpro) {
      super(props)
    
      this.state = {
          name: "",
          email: ""
      }
    }

    hanCh = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value,
            email: e.target.value
        })
    }

    creA = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        
    }

    render() {
        return (
            <div>
                <label>Employee Name: <input type="text" value={this.state.name} onChange={this.hanCh} /></label><br/>
                <label>Employee Email: <input type="text" value={this.state.email} onChange={this.hanCh} /></label><br/>  
                <button onClick={this.creA}> Create </button> 
                <h1> {this.state.name} </h1>
                <h1> {this.state.email} </h1>           
            </div>
        );
    }
}

export default Event;