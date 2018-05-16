import React from "react";

const Search = () => 

<form>
  <div class="form-group">
    <label for="topic">Topic</label>
    <input type="text" class="form-control" id="topic"/>
  </div>
  <div class="form-group">
    <label for="yearStart">Start Year</label>
    <input type="text" class="form-control" id="yearStart" />
  </div>
  <div class="form-group">
    <label for="yearEnd">End Year</label>
    <input type="text" class="form-control" id="yearEnd" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

export default Search;