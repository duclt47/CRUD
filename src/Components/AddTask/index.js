import React, {Component} from 'react';
import './style.css';
class AddTask extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      status: 'deactive',
    }
  }
  CloseForm = () => {
    this.props.CloseForm();
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
    
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // console.log(this.state)
  }
  render() {
    return (
      <div className='col-sm-4'>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          Add task
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.CloseForm}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card col-sm-12">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="Name" placeholder="Name" onChange={this.onChange}/>
            </div>
            <select
              className="form-control form-control-sm form-group"
              name="Status"
              onChange={this.onChange}
              value={this.state.status}
            >
              <option value={'active'} >active</option>
              <option value={'deactive'}>deactive</option>
            </select>
            <div className='wrap-button'>
              <button type='submit' className="btn btn-primary">Save</button>&nbsp;
              <button type='button' className="btn btn-danger">Clear</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTask;