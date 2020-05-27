import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';
import './App.css';
// import Home from './pages/homePage.js';
// import Comments from './pages/comments.js';
// import Chat from './pages/chatpage.js';


function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>           
        </switch>
      </div>
    </Router>
  );

  // useEffect(()=>{
  //   console.log("will see me when i render")
  // },[])
  // return (
  //   <>
  //     {/* <Home/>
  //   <Comments/>   */}
  //   </>
  // );
}
export default App;
function Home(){
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;  
}

function Users() {
  return <h2>Users</h2>;   
}