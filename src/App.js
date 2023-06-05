import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import { AuthContext, FirebaseContext } from './Store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user)
  // if (user) {
  //   // User is signed in, see docs for a list of available properties
  //   // https://firebase.google.com/docs/reference/js/auth.user
  //   const uid = user.uid;
  //   // ...
  // } else {
  //   // User is signed out
    
  // }
});
  })
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
