import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk'; 

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Layout from './components/layout';

import history from 'history'; 
import requiereAuth from './components/requireAuth'; 

class Dashboard extends Component {
  render() {
    return(
      <div>
        hey there
      </div>
    )
  }
}

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout> 
            <Route path='/' exact component={Signin}/>
            <Route path='/siginin' exact component={Signin}/>
            <Route path='/signup' component={Signup}/>

            <Route path='/dashboard' component={requiereAuth(Dashboard)}/>
          </Layout>
        </Switch> 
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
