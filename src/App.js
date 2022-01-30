import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Wishlist } from './Wishlist';
import { LoginApp } from './Login'; 
import { Home } from './Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import './App.css';
import Form from "./Login"
 
function App() {
  return (
    <div className="App">
      <Form />
    </div>
     
  );
}
 
export default App;