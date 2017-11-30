import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import AddTask from './Components/AddTask';
import Search from './Components/Search';
import Items from './Components/Items';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAddTask: true,
      nameTask: '',
      statusTask: '',
      listTask: [
        {
          name: 'learn reactjs',
          status: 'active',
        },
        {
          name: 'learn redux',
          status: 'deactive',
        },
        {
          name: 'learn angular',
          status: 'deactive',
        },
        {
          name: 'learn vuejs',
          status: 'deactive',
        },
      ]
    }
  }
  renderTask = () => {
    return (
      this.state.listTask.map(function(item,index){
        return(
          <Items numerical={index} nameTask={item.name} status={item.status} key={index}/>
        )
      }) 
    )
  }

  CloseForm = () => {
    this.setState({
      isShowAddTask: false
    })
  }

  onSubmit = (data) => {
    this.state.listTask.push(data);
    this.setState({
      listTask: this.state.listTask
    })
  }
  render() {
    return (
      <div className="App">
        <Title title='CRUD'/>
        <div className='content'>
          { this.state.isShowAddTask ? <AddTask
            CloseForm = { () => this.CloseForm() }
            onSubmit = { (data) => this.onSubmit(data) }
            /> : '' }
          <div className={this.state.isShowAddTask ? 'col-sm-8 wrapper' : 'col-sm-12 wrapper' }>
            <div className='add'>
              <button type="submit" className="btn btn-primary add-button" onClick={() => this.setState({ isShowAddTask: true })}>
                <i className="fa fa-plus icon-add-button"></i>&nbsp; Add Task
              </button>
            </div>
            <div>
              <div className='wrap-search-sort'>
                <Search />
                <button type="submit" className="btn btn-dark">Sort &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></button>
              </div>
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
                  {this.renderTask()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
