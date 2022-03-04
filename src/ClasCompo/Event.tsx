import React, { ChangeEvent, Component } from 'react';

type Msa = {
    name: string;
    email: string;
}

// define kr lo state y {} aise rakh lo

class Event extends Component<{} , Msa> {

    constructor(props:{}) {
      super(props)
    
      this.state = {
          name: "",
          email: ""
      }
    }

    hanCh = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value,
            email : e.currentTarget.value
        })
    }

    creA = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        
    }

    render() {
        return (
            <form>
                <label>Employee Name: <input type="text" name="name" value={this.state.name} onChange={this.hanCh} /></label><br/>
                <label>Employee Email: <input type="text" name="email" value={this.state.email} onChange={this.hanCh} /></label><br/>  
                <button onClick={this.creA}> Submit </button> 
                <h1> {this.state.name} </h1>
                <h1> {this.state.email} </h1>           
            </form>
        );
    }
}

export default Event;