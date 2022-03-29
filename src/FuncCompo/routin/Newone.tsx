import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {id: '1', name: 'Phone', price: '$399'},
  {id: '2', name: 'television', price: '$299'}
]

const Newone = () => {
  const history = useNavigate();
  const handleClick = (data: any) => {
    history("/dimm" , data);
  }
  return (
    <ul>
      {products.map(product=>(
        <li
          key={product.id}
          onClick={()=>handleClick(product)}
        >
          {product.name}
          {product.price}
        </li>
      ))}
    </ul>
  )
}

export default Newone;