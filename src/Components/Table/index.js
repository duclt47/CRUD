import React from 'react';

function Table({props}) {
  return (
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
  )
}

export default Table;