import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home(){
  return(
  <div>
    <h2>Welcome to the home page</h2>
    <span>click on any of the link to see components tied to them</span>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/auth">auth</Link>
      </li>
      <li>
        <Link to="/chat">ChatPage</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      <li>
        <Link to="/download">downloadPage</Link>
      </li>
      <li>
        <Link to="/payment">payment</Link>
      </li>
    </ul>
    <span>If you have question please ask or consult google</span>
  </div>
 );
}


export default Home;
