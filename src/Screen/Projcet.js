import React, {useContext} from 'react'
import Table from '../components/Table';
import UserContext from '../context/UserContext';
import projectStyle from '../Styles/Project.module.css';

const Projcet = () => {
  const { userProject, onSearchChange, searchInput } = useContext(UserContext);
  let uniqueKeyProp = 1;
  const table = userProject.map(project => {
    if (!project.title.toLowerCase().includes(searchInput.toLowerCase())) return '';
    return (
      <Table
        title={project.title}
        lead={project.lead}
        priority={project.priority}
        dueDate={project.dueDate}
        description={project.description}
        key={uniqueKeyProp++}
      />
    )
  });


  return (
    <div className={projectStyle.project}>
      <input placeholder='Search Project' onChange={onSearchChange}/>
      <table className={projectStyle.table}>
        <thead>
        <tr>
          <th>Title</th>
          <th>Lead By</th>
          <th>Priority</th>
          <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody> 
      </table>
    </div>
  )
}

export default Projcet