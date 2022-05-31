
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import Footer from './components/Footer'
import './App.scss'
import AccontModal from './components/AccontModal';
import Home from './views/Home'
import Login from './views/Login';
import Dashbord  from './views/Dashbord';

const App = () => {
  const [showModal,setShowModal,] = useState(false);
  return(
    <>
      <Navbar hendleCreateAcc= {() => setShowModal(true)}/>

        <Routes>
            <Route path="/" element={<Home handleClick={() => setShowModal(true)}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashbord" element={<Dashbord />} />
        </Routes>

      <Footer />
      <AccontModal show={showModal} handleClose={() => setShowModal(false)}/>
    </>
  );
};


export default App;
