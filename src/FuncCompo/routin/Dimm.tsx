import React from 'react';

const Dimm = (props: any) => {
  const productDetails = props.state ; 
  // state object contains the data
  return (
    <div>
      <span>{productDetails.id}</span>
      <span>{productDetails.name}</span>
      <span>{productDetails.price}</span>
    </div>
  );
}

export default Dimm;