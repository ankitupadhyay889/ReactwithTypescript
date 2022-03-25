import React, { useState } from 'react';
import Demo  from './Demo';
import "../../App.css";

const Modell = () => {

  const [isopen, setopen] = useState<boolean>(false)

  return (
    <div>
      <div className='lpp'>
        <button onClick={() => setopen(true)}>Opern Modal</button>
        <Demo open={isopen} onClose={() => setopen(false)}> Fanc </Demo>
      </div>
      
      <div>Other Content</div>
    </div>
  );
};

export default Modell;