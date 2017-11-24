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
  render() {
    return (
      <div className="App">
        <Title title='CRUD' />
        <div className='content'>
          <AddTask />
          <div className='col-sm-8 wrapper'>
            <div className='add'>
              <button type="submit" className="btn btn-primary add-button"><i className="fa fa-plus icon-add-button"></i>&nbsp; Add Task</button>
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
                  <Items numerical={2} nameTask='learn redux' status='deactive'/>
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
