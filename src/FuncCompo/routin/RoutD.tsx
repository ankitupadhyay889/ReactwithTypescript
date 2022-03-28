import React from 'react';
import { BrowserRouter as Router , Routes , Link , Route } from 'react-router-dom';
import { Banner, Foot, Home } from './Pages';

const RoutD = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                        <Link to="/foot" >Foot</Link>
                        <Link to="/banner" >Banner</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foot' element={<Foot />} />
            <Route path='/banner' element={<Banner />} />
            </Routes>
        </Router>
    );
};

export default RoutD;