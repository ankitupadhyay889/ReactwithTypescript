import React, { Component } from 'react';
import Usestapro from './Component/Usestapro';
// import Newda from './Component/Newda';
// import Newo from './Component/Newo';
// import Day1 from './Component/Day1';

class App extends Component {
  render() {
    return (
      <div>

        {/* <Day1 message='Hello this is first example in React with TypeScript'/> */}
        {/* <Newo title='Ankit Upadhyay'/> */}

        {/* <Newda /> */}

        <Usestapro category='Personal' />

      </div>
    );
  }
}

export default App;