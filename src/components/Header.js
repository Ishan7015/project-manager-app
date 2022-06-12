import React, { useContext } from 'react';
import HeaderStyle from '../Styles/Header.module.css';
import routeContext from '../context/RouteContext';


const Header = () => {

    const { onRouteChange } = useContext(routeContext);

    return (
        <div className={HeaderStyle.header}>
            <h1>Orion Projects</h1>
            <ul className={HeaderStyle.navLink}>
                <li>Profile</li>
                <li>Projects</li>
                <li>Add Project</li>
                <li onClick={()=>onRouteChange('signin')}>SignOut</li>
            </ul>    
        </div>
  )
}

export default Header