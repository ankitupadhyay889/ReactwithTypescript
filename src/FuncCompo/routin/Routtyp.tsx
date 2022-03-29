import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { About, Contact, Dashboard } from './Pages';
import Linkin from './Linkin';
import Errorpa from './Errorpa';

const Routtyp = () => {
    return (
        <>
            <Linkin/>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route element={<Errorpa />} />
            </Routes> 
        </>
    );
};

export default Routtyp;