import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Errorpa from './Errorpa';
import Product from './Product';
import Newone from './Newone';
import Dimm from './Dimm';
import Data from './Data';
import Datalink from './Datalink';
import UserForm from './compon/Userform';
import { About, Contact } from './Pages';
// const Dashboard = React.lazy(() => import('./Pages').then(({Dashboard}) => ({default: Dashboard})));
// const About = React.lazy(() => import('./Pages').then(({About}) => ({default: About})));
// const Contact = React.lazy(() => import('./Pages').then(({Contact}) => ({default: Contact})));

// const Loading = () => <p>Loading ...</p>;

const Routtyp = () => {
    return (
        <>
        {/* <React.Suspense fallback={<Loading />}> */}
            <Routes>
                <Route path='/' element={<UserForm />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:name' element={<Product />} />
                <Route path='/newone' element={<Newone />} />
                <Route path='/dimm' element={<Dimm />} />
                <Route path='/data' element={<Data />} />
                <Route path='/datalink' element={<Datalink />} />
                <Route path='*' element={<Errorpa />} />
            </Routes> 
        {/* </React.Suspense> */}
        </>
    );
};

export default Routtyp;