import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import User from './User';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      Welcome !
      <br/><br/>
      <a href="/user"
            class="btn btn-success pull-right">All User
          </a>

            <BrowserRouter>
              <Switch>
                  <Route path='/register' component={ Register }/>
                  <Route path='/user' component={ User }/>
              </Switch>
          </BrowserRouter>
         
    </div>
   
  );
}

export default App;
