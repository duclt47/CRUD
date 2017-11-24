import React from 'react';
import './style.css';
function AddTask({ }) {
  return (
    <div className='col-sm-4'>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        Add task
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="card col-sm-12">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="Name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label>Status</label>
            <input type="text" className="form-control" id="Status" placeholder="Status"/>
          </div>
          <div className='wrap-button'>
            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
            <button type="submit" className="btn btn-danger">Delete</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask;