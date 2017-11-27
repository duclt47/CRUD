import React from 'react';
import './style.css';
function AddTask({ onClick, onChange, getName, getStatus, save, clear }) {
  return (
    <div className='col-sm-4'>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        Add task
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="card col-sm-12">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="Name" placeholder="Name" onChange={getName}/>
          </div>
          <select className="form-control form-control-sm form-group" onChange={getStatus}>
            <option>active</option>
            <option>deactive</option>
          </select>
          <div className='wrap-button'>
            <button type='button' className="btn btn-primary" onClick={save}>Save</button>&nbsp;
            <button type='button' className="btn btn-danger" onClick={clear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask;