import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

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
      <Post>
      <Router>
        <Routes>
          <Route exact path = '/' element={<Home/>}>
          </Route>
          <Route path = '/signup' element={<Signup/>}>
          </Route>
          <Route path = '/login' element={<Login/>}>
          </Route>
          <Route path = '/create' element={<Create/>}>
          </Route>
          <Route path = '/view' element={<View/>}>
          </Route>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
