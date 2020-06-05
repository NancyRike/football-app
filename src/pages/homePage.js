import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/footer.js';
import Header from '../components/header/header.js';
import sidebar from '../components/sidebarl.js';
import Sidebar from '../components/sidebarl.js';
import Sidebar_left from '../components/sidebarl.js';

function Home(){
  return(
  <div>
    <Header/>
    <Sidebar_left/>
    <Footer/>  
  </div>
 );
}


export default Home;
