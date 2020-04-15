import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <p className="textBook">My Contacts Book</p>
      <Link to="/allcontacts"><button className="contactBtn">All Contacts</button></Link>
      <Link to="/newcontact"><button className="contactBtn">New Contact</button></Link>
    </div>
  );
}

export default App;
