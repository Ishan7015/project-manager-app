import React, { useContext, useState } from 'react';
import signinStyle from '../Styles/Signin.module.css';
import routeContext from '../context/RouteContext';
import { users } from '../TempDb';

const Signin = () => {

  const { onRouteChange } = useContext(routeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const authUser = () => {
    users.forEach(user => {
      if (user.email === email && user.password === password) {
        onRouteChange('project');
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