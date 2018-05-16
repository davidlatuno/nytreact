import React from "react";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import Search from "./components/Search"

const App = () =>

    <div className="container-fluid">

        <Jumbotron />

        <Card title="Search" body={<Search/>}/>

        <Card title="Results" body={<h1>Nothing Found</h1>} />

        <Card title="Saved" body={<h1>Nothing Found</h1>} />


    </div>

export default App;
