import React, {useContext} from 'react'
import Table from '../components/Table';
import UserContext from '../context/UserContext';
import projectStyle from '../Styles/Project.module.css';

const Projcet = () => {
  const { userProject } = useContext(UserContext);

  const table = userProject.map(project => {
    return (
      <Table
        title={project.title}
        lead={project.lead}
        priority={project.priority}
        dueDate={project.dueDate} 
      />
    )
  });

  return (
    <div className={projectStyle.project}>
      <input placeholder='Search Project'/>
      <table className={projectStyle.table}>
        <tr>
          <th>Title</th>
          <th>Lead By</th>
          <th>Priority</th>
          <th>Due Date</th>
        </tr>
        {table}
      </table>
    </div>
  )
}

export default Projcet