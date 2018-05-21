import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import Search from "./components/Search";
import API from "./utils/API";
import moment from "moment";

class App extends Component {

    state = {
        search: "",
        yearStart: "",
        yearEnd: "",
        results: {},
        saved: []
    }


    componentDidMount() {
        this.getSaved();
    }

    getSaved = () => {
        API.getSaved()
            .then(res => this.setState({
                saved: res.data
            }))
            .then(() => { console.log(this.state.results) })
            .catch(err => console.log(err));
    }


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.yearEnd === "" && this.state.yearStart === "") {
            API.getArticles(this.state.search)
                .then(res => this.setState({
                    results: res.data
                }))
                .then(() => { console.log(this.state.results) })
                .catch(err => console.log(err));

        } else {
            API.getArticlesWithYear(this.state.search, this.state.yearStart, this.state.yearEnd)
                .then(res => this.setState({
                    results: res.data
                }))
                .then(() => { console.log(this.state.results) })
                .catch(err => console.log(err));
        }

    };

    saveArticle = (title, date, url) => {
        API.createSaved({
            title: title,
            date: date,
            url: url
        })
            .then(res => { console.log(res) })
            .then(this.getSaved())
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteArticle(id)
            .then(res => this.getSaved())
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div className="container-fluid">

                <Jumbotron />

                <Card
                    title="Search"
                    body={<Search search={this.state.search}
                        start={this.state.yearStart}
                        end={this.state.yearEnd}
                        handleInput={this.handleInputChange}
                        handleClick={this.handleFormSubmit} />}
                />

                <Card
                    title="Results"
                    body={this.state.results.response ?
                        this.state.results.response.docs.map(input =>
                            <Card
                                title={input.headline.main}
                                body={<div><p>Published: {moment(input.pub_date).format('MMMM Do, YYYY')}</p>
                                    <p><a target="_blank" href={input.web_url}>Article Link</a></p> <button type="button" className="btn btn-success" onClick={() => this.saveArticle(input.headline.main, input.pub_date, input.web_url)}>Save</button></div>} />)
                        : "Nothing Found"} />

                <Card
                    title="Saved"
                    body={this.state.saved[0] ?
                        this.state.saved.map(input =>
                            <Card
                                title={input.title}
                                body={

                                    <div><p>Published: {moment(input.date).format('MMMM Do, YYYY')}</p>
                                        <p><a target="_blank" href={input.url}>Article Link</a></p>

                                        <button type="button" className="btn btn-danger" onClick={() => this.deleteBook(input._id)}>Delete</button> </div>} />)
                        : "Nothing Found"} />

            </div>
        )
    }
}



export default App;
