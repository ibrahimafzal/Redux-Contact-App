import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Header from './cardContainer/Header';
import CardsDetails from './cardContainer/CardsDetails'
import Cards from './cardContainer/Cards';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Header/>
      

      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path='/add' element = {<AddContact/>}/>
        <Route path='/edit/:id' element = {<EditContact/>} />
        <Route path='/cards' element = {<Cards/>} />
        <Route path='/cart/:id' element={<CardsDetails/>} />
        <Route path='/header' element={<Cards/>} />

      </Routes>
    </div>
  );
}

export default App;
