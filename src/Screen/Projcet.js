import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Projcet = () => {
  //Current user state
  const { currentUser } = useContext(UserContext);

  return (
    <div>{ currentUser.name }</div>
  )
}

export default Projcet