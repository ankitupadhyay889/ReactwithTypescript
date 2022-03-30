import React from 'react';
import { Link } from 'react-router-dom';

const Datalink = () => {
    // this is for the first Link
    const data1 = {
      from: "Link #1",
      message: "Welcome to KindaCode.com",
      timestamp: Date.now(),
    };
  
    // this is for the second Link
    const data2 = {
      from: "Link #2",
      message: "Just another message",
      timestamp: Date.now(),
    };
  
    return (
      <>
        <h1>SendData Page</h1>
        <p>
          <Link to="/dimm" state={data1}>
            Go to Dimm Page (Link #1)
          </Link>
        </p>
        <p>
          <Link to="/dimm" state={data2}>
            Go to Dimm Page (Link #2)
          </Link>
        </p>
      </>
    );
  };

export default Datalink;