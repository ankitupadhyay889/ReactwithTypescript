import React from 'react';
import { Routes , Route } from 'react-router-dom';
// import { About, Contact, Dashboard } from './Pages';
import { About, Dashboard } from './Pages';
import Contact from './page/Contact';
import Errorpa from './page/Errorpa';
import Product from './page/Product';
import Topic from "./page/Topic";
import Newone from './Newone';
import Dimm from './Dimm';

// const Dashboard = React.lazy(() => import('./Pages').then(({Dashboard}) => ({default: Dashboard})));
// const About = React.lazy(() => import('./Pages').then(({About}) => ({default: About})));
// const Contact = React.lazy(() => import('./Pages').then(({Contact}) => ({default: Contact})));

// const Loading = () => <p>Loading ...</p>;

const Routtyp = () => {
    return (
        <>
        {/* <React.Suspense fallback={<Loading />}> */}
            <Routes>
            <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/topic' element={<Topic />} />
                <Route path='/product/:name' element={<Product />} />
                <Route path='/newone' element={<Newone />} />
                <Route path='/dimm' element={<Dimm />} />
                <Route path='*' element={<Errorpa />} />
            </Routes> 
        {/* </React.Suspense> */}
        </>
    );
};

export default Routtyp;