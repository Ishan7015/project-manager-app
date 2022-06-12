import React, { useContext, useState } from 'react';
import signupStyle from '../Styles/Signup.module.css';
import routeContext from '../context/RouteContext';
import { users } from '../TempDb';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onRouteChange } = useContext(routeContext);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const addNewUser = (name, email, password, company) => {
        if (name !== '' && email !== '' && password !== '') {
            users.push({
                name,
                email,
                password,
                company
            });
            console.log('Here');
            onRouteChange('project');
        }
    }

    

  return (
    <div className={signupStyle.form}>
    <div className={signupStyle.container}>
      <h1>Sign Up</h1>
      <input type='text' placeholder='Name' onChange={onNameChange}/>
      <input type='text' placeholder='Email' onChange={onEmailChange}/>
      <input type='password' placeholder='Password' onChange={onPasswordChange}/>
      <button className={signupStyle.signinBtn} onClick={()=>addNewUser(name, email, password, 'Orion')}>Signup</button>
      <h4>Already have an account? <span onClick={()=>onRouteChange('signin')}>Signin</span></h4>
    </div>
    </div>
  )
}

export default Signup