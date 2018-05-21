import React, { Component } from "react";

class Search extends Component {

    state = {
        topic: "",
        startYear: "",
        endYear: ""
    }


    render() {

        return (

            <form>
                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input type="text" className="form-control" id="topic" name="search" value={this.props.search} onChange={this.props.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="yearStart">Optional: Start Year (YYYYMMDD)</label>
                    <input type="number" className="form-control" id="yearStart" name="yearStart" value={this.props.start} onChange={this.props.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="yearEnd">Optional: End Year (YYYYMMDD)</label>
                    <input type="number" className="form-control" id="yearEnd" name="yearEnd" value={this.props.end} onChange={this.props.handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick= {this.props.handleClick}>Submit</button>
            </form>
        )
    }
}



export default Search;