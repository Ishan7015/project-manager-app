import React, {useContext} from 'react';
import Header from './components/Header';
import routeContext from './context/RouteContext';
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';

const App = () => {

  const { route } = useContext(routeContext);

  const screen = () => {
    if (route === 'signin') return (<Signin />);
    if (route === 'project') return (<Header />);
    if (route === 'signup') return (<Signup />);
  }

  return (
      <div className='app'>
        {screen()}
      </div>
  )
}

export default App