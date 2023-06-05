import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = '/' element={<Home/>}>
            {/* <Home /> */}
          </Route>
          <Route path = '/signup' element={<Signup/>}>
            {/* <Signup /> */}
          </Route>
          <Route path = '/login' element={<Login/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
