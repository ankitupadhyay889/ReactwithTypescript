import React, { Component } from 'react';
import New from './Component/New';
// import Day1 from './Component/Day1';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Day1 message='Hello this is first example in React with TypeScript'/> */}
        <New title='Ankit Upadhyay'/>
      </div>
    );
  }
}

export default App;