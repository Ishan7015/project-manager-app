import React, { useContext, useState } from 'react';
import signinStyle from '../Styles/Signin.module.css';
import routeContext from '../context/RouteContext';
import userContext from '../context/UserContext';
import { users } from '../TempDb';

const Signin = () => {
  //onRouteChange handels route state change
  const { onRouteChange } = useContext(routeContext);

  //Function to change current user on sign in
  const { updateCurrentUser } = useContext(userContext);

  //Email and password state to comapare inputs with database
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Update function to update Email and Password state on user input
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  //Function to compare users input credentials with the database
  const authUser = () => {
    users.forEach(user => {
      if (user.email === email && user.password === password) {
        onRouteChange('project');
        updateCurrentUser({
          name: user.name,
          email: user.email,
          company: user.company
        })
      } 
    })
  }

  return (
    <div className={signinStyle.form}>
    <div className={signinStyle.container}>
      <h1>Sign in</h1>
      <input type='text' placeholder='Email' onChange={onEmailChange}/>
      <input type='password' placeholder='Password' onChange={onPasswordChange}/>
      <button onClick={authUser} className={signinStyle.signinBtn}>Signin</button>
      <button className={signinStyle.signupBtn}>Forgot Password?</button>
      <h4>Need an account? <span onClick={()=>onRouteChange('signup')}>Create Account</span></h4>
    </div>
    </div>
  )
}

export default Signin