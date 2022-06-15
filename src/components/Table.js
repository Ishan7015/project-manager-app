import React, { useContext } from 'react';
import routeContext from '../context/RouteContext';
import UserContext from '../context/UserContext';

const Table = ({ title, lead, dueDate, priority, description }) => {

  const { onRouteChange } = useContext(routeContext);
  const { updateCurrentProject } = useContext(UserContext);

  const handleClick = () => {
    onRouteChange('projectPage');
    updateCurrentProject({
      title, lead, priority, dueDate, description
    });
  }

  return (
      <tr onClick={handleClick}>
        <td>{ title }</td>
        <td>{ lead }</td>
        <td>{ priority }</td>
        <td>{ dueDate }</td>
      </tr>
  )
}

export default Table;