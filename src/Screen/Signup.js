import React, { useContext, useState } from 'react';
import signupStyle from '../Styles/Signup.module.css';
import routeContext from '../context/RouteContext';
import { users } from '../TempDb';

const Signup = () => {
    //onRouteCgange to handle change of route state
    const { onRouteChange } = useContext(routeContext);

    //State to store new users data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //Functions to update states on users input
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
        let isUnique = true;
        users.forEach(user => { 
            if (user.name === name || user.email === email) isUnique = false;
        });       
        if (!isUnique) {
            alert("User Name or Email already exist");
            return;
        }
        if (name !== '' && email !== '' && password !== '') {
            users.push({
                name,
                email,
                password,
                company
            });
            onRouteChange('project');
            console.log(users);
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