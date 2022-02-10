import React, { Component } from 'react';
import Newgen from './Component/Newgen';
// import Newo from './Component/Newo';
// import Day1 from './Component/Day1';

class App extends Component {
  render() {
    return (
      <div>

        {/* <Day1 message='Hello this is first example in React with TypeScript'/> */}
        {/* <Newo title='Ankit Upadhyay'/> */}

        <Newgen />

      </div>
    );
  }
}

export default App;