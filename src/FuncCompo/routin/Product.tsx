import React from 'react';
import { useParams } from 'react-router-dom';
import ProductName from "./ProductName";

type Ipage = {
    name: string;
}

const Product = () => {

    const {name} = useParams<Ipage>()

    return (
        <div>
            <ProductName />
            
            <h1> Product Name: {name} </h1>
        </div>
    );
};

export default Product;