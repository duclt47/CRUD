import React from 'react';

function Search({onChange}) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." onChange={onChange}/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button"><i className="fa fa-search"></i></button>
      </span>&nbsp;
    </div>
  )
}

export default Search;