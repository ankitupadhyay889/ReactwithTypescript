import React from "react";

class Reconci extends React.Component { 
    state = {
      result: '',
      entry1: '',
      entry2: ''
    }
  
    handleEntry1 = (event: any) => {
      this.setState({entry1: event.target.value})
    }
    
    handleEntry2 = (event: any) => {
      this.setState({entry2: event.target.value})
    }
  
    handleAddition = (event: any) => {
      const firstInt = parseInt(this.state.entry1)
      const secondInt = parseInt(this.state.entry2)
      this.setState({result: firstInt + secondInt })
    }
    
    render() {
      const { entry1, entry2, result } = this.state
      return(
        <div>  
          <div>
            <p>Entry 1: { entry1 }</p>
            <p>Entry 2: { entry2 }</p>
            <p>Result: { result }</p>
          </div>
          <br />
          <div>
            <span>Entry 1: </span>
            <input type='text' onChange={this.handleEntry1} />
          </div>
          <br />
          <div>
            <span>Entry 2: </span>
            <input type='text' onChange={this.handleEntry2} />
          </div>
          <div>
            <button onClick={this.handleAddition} type='submit'>Add</button>
          </div>
        </div>
      )
    }
  }
export default Reconci;  