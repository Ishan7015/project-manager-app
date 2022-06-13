import React from 'react';

const Table = ({ title, lead, dueDate, priority }) => {
    return (
      <tr>
        <td>{ title }</td>
        <td>{ lead }</td>
        <td>{ priority }</td>
        <td>{ dueDate }</td>
      </tr>
  )
}

export default Table;