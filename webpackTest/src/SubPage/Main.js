import React, { Component } from "react"; 
import "./main.css";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { Route, HashRouter, BrowserRouter, NavLink } from "react-router-dom";


export default class Main extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="mainDiv">
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <br />
                    <br />
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}