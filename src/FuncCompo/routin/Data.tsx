import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {id: '1', name: 'Phone', price: '$399'},
  {id: '2', name: 'television', price: '$299'}
]

const Data = () => {
  const history = useNavigate();
  const handleClick = (data: any) => {
    history('/dimm', {state: data});
  }
  return (
    <ul>
      {products.map(product=>(
        <li key={product.id} onClick={()=>handleClick(product)}>
          {product.name}
        </li>
      ))}
    </ul>
  )
}

export default Data;