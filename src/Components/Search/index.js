import React from 'react';

import Items from '../Items';
import Table from '../Table';
function Search({ }) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button"><i className="fa fa-search"></i></button>
      </span>&nbsp;
    </div>
  )
}

export default Search;