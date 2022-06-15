import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const ProjectPage = () => {
  const { currentProject } = useContext(UserContext);

  return (
    <div>{currentProject.description}</div>
  )
}

export default ProjectPage