import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import Search from "./components/Search";
import API from "./utils/API";

class App extends Component {

    state = {
        search: "california",
        results: []
    }


    componentDidMount() {
        API.getArticles(this.state.search)
            .then(res => this.setState({
                results: res.data
            }))
            .then(() => {console.log(this.state.results)})
            .catch(err => console.log(err));
    }


    render() {


        return (
            <div className="container-fluid">

                <Jumbotron />

                <Card title="Search" body={<Search />} />

                <Card title="Results" />

                <Card title="Saved" body={<h1>Nothing Found</h1>} />


            </div>
        )
    }
}



export default App;
