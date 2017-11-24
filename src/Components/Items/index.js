import React from 'react';
import './style.css';
function Items({numerical,nameTask,status}) {
  let isactive = false;
  if (status === 'active') {
    isactive = true;
  }
  const buttonActive = <button type="button" className="btn btn-outline-primary">{status}</button>
  const buttonDeactive = <button type="button" className="btn btn-outline-danger">{status}</button>
  return (
    <tr>
      <th scope="row" className='center'>{numerical}</th>
      <td className='center'>{nameTask}</td>
      <td>
        {isactive ? buttonActive : buttonDeactive}
      </td>
      <td>
        <button type="submit" className="btn btn-primary">Edit</button>&nbsp;
        <button type="submit" className="btn btn-danger">Delete</button>
      </td>
  </tr>
  )
}

export default Items;