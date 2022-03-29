import React from 'react';
import { Link } from 'react-router-dom';

const RoutD = () => {
    return (
            <div>
                <ul>
                    <li>
                        <Link to={`/product/product1`} >Product1</Link>
                    </li>
                    <li>
                        <Link to={`/product/product2`} >Product2</Link>
                    </li>
                    <li>
                        <Link to={`/product/product3`} >Product3</Link>
                    </li>
                </ul>
            </div>
    );
};

export default RoutD;