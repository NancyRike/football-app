import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DownloadPAge from './pages/downloadpage';
import Home from './pages/homePage';
import Chat from './pages/chatpage';
import Comments from './pages/comments';
import PaymentPage from './pages/paymentModal';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
              <Route path="/auth">
                <AuthPage/>
              </Route>
              <Route path="/download">
                <DownloadPAge/>
              </Route>
              <Route path="/" exact>
                <Home/>
              </Route>           
              <Route path="/chat">
                <Chat/>
              </Route>           
              <Route path="/comments">
                <Comments/>
              </Route>           
              <Route path="/payment">
                <PaymentPage/>
              </Route>           
            </Switch>
        </Router>
      );
}

export default AppRouter