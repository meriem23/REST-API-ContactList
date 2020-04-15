import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

ReactDOM.render(
  <Provider store = {store}>
 <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route  path="/allcontacts" component={ContactList} />
    <Route  path="/newcontact" component={AddContact} />
    <Route  path="/contact/:id" component={EditContact} />
  </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
