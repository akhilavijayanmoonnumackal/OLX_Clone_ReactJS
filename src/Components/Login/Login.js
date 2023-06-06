import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password){

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      // Signed in 
      //const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    }else{
      setError("ALL FIELDS ARE REQUIRED")
    }

  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth,email, password)
  // .then((userCredential) => {
  //   let user = userCredential.user;
  //   updateProfile(auth.currentUser,{displayName: username})
  //   .then(() => {
  //     firebase.firestore().collection('users').add({
  //       id:user.uid,
  //       username:username,
  //       phone:phone
  //     }).then(() => {
  //       navigate("/login")
  //     })
  //   })
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log(errorCode, errorMessage);
  // });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <div className='error'>{error}</div>
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
