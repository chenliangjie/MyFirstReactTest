import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav";

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Nav />
            </div>
        );
    }
}