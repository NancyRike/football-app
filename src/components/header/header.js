import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App.js';
import logo from '../img/Logo.png';
import photo from '../img/minilogo.png';
// import styling from '../header/header.css'
function Header() {
    return(
            <nav className="d-flex navbar bg-white">
                <div className='d-flex'>
                    <img src = {logo}></img>
                    <h6 className="pt-3 logoInscription">Arebian Sports</h6>
                </div>
                <div className = "">
                    <ul className ="nav">
                        <li className="nav-item"><a className="nav-link" href ='#'>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href ='#'>Fan Connect</a></li>
                        <li className="nav-item"><a className="nav-link" href ='#'>Livescore</a></li>
                        <li className="nav-item"><a className="nav-link" href = '#'>About</a></li>
                    </ul>        
                </div> 
                <div className="row"> 
                    <button className="col-6 post_article">Post an article</button>
                    <i class="fa fa-search col-2 mt-2" aria-hidden='true '></i>
                    <i class="fa fa-bell-o col-2 mt-2" aria-hidden="true"></i>  
                    <img src ={photo} className="col-2"></img> 
                </div>
                           
            </nav>
    );    
}
export default Header;