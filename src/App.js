import React, {useContext} from 'react';
import Header from './components/Header';
import routeContext from './context/RouteContext';
import Projcet from './Screen/Projcet';
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';

const App = () => {
  //Route state for routing
  const { route } = useContext(routeContext);

  //Routing based on state change
  const screen = () => {
    if (route === 'signin') return (<Signin />);
    if (route === 'project') return (<>
      <Header />
      <Projcet />
    </>);
    if (route === 'signup') return (<Signup />);
  }

  return (
      <div className='app'>
        {screen()}
      </div>
  )
}

export default App