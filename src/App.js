import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Header } from "./Header";
//import { useEffect, useState } from "react";
//import { Wishlist } from './Wishlist';
//import { LoginApp } from './Login'; 
import { Home } from './Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
 import Dashboard from "./dashboard";
import LogIn from "./Login";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;