import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/homePage';
import TnC from './pages/TnC';
import Copyright from './pages/copyright';
import PaymentPage from './pages/paymentModal';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/TnC">
                <TnC/>
              </Route>
              <Route path="/" exact>
                <Home/>
              </Route>           
              <Route path="/contact">
                <Contact/>
              </Route>           
              <Route path="/copyright">
                <Copyright/>
              </Route>           
              </Switch>
        </Router>
      );
}

export default AppRouter