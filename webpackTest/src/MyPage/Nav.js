import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./MySubPages/Home";
import About from "./MySubPages/About";
import Topics from "./MySubPages/Topics";
import "./Nav.css"

export default class Nav extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="nav_ul">
                        <li className="nav_ul_li"><Link to="/">Home</Link></li>
                        <li className="nav_ul_li"><Link to="/about">About</Link></li>
                        <li className="nav_ul_li"><Link to="/topics">Topics</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </div>
            </Router>
        );
    }
}