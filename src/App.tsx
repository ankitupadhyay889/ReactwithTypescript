import React, { Component } from 'react';
import './App.css';
import Listtyp from './Component/Listtyp';
// import Usestapro from './Component/Usestapro';
// import Newda from './Component/Newda';
// import Newo from './Component/Newo';
// import Day1 from './Component/Day1';

class App extends Component {

  render() {
    let list = [
      {
        name:"Ankit",
        address: "N3/75",
        phonenumber: 7845896548
      }
    ]
    return (
      <div className='App'>

        {/* <Day1 message='Hello this is first example in React with TypeScript'/> */}
        {/* <Newo title='Ankit Upadhyay'/> */}

        {/* <Newda /> */}

        {/* <Usestapro category='Personal' /> */}

        <Listtyp lists={list} />

      </div>
    );
  }
}

export default App;





// import React from 'react';
// import First from './FuncCompo/First';

// const App = () => {

//       let lists = [
//       {
//         name:"Ankit",
//         address: "N3/75",
//         phonenumber: 7845896548
//       }
//     ]

//   return (
//     <div>
//       <First lists={lists} />
//     </div>
//   );
// };

// export default App;