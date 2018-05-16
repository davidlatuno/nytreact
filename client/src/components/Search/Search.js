import React from "react";

const Search = () => 

<form>
  <div className="form-group">
    <label htmlFor="topic">Topic</label>
    <input type="text" className="form-control" id="topic"/>
  </div>
  <div className="form-group">
    <label htmlFor="yearStart">Start Year</label>
    <input type="text" className="form-control" id="yearStart" />
  </div>
  <div className="form-group">
    <label htmlFor="yearEnd">End Year</label>
    <input type="text" className="form-control" id="yearEnd" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

export default Search;