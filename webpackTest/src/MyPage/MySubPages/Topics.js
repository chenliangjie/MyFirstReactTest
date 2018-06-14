import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Topic from "./Topic";
import "./Topics.css";
import Topic4 from "./Topic4";

class DefaultDisplay extends React.Component {
    render() {
        return(
            <div className="summary_div">
                <h3>Please select a topic</h3>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.numberIds = this.props.content;
    }

    render() {
        const menuItems = this.numberIds.map((item) =>
            <li key={item}><Link to={ `${this.props.urlPrefix}/${item}` }>{item}</Link></li>
        );
        return(
            <ul className="topics_ul">{menuItems}</ul>
        );
    }
}

export default class Topics extends React.Component {
    render() {
        let content = ["render1","render2","render3","render4"];
        return(
            <div className="topics_div">
                <div className="menulist_div">
                    <h2>Topics</h2>
                    <Menu urlPrefix={`${this.props.match.url}`} content={content} />
                </div>
                <Switch>
                    <Route exact path={ this.props.match.url } component={DefaultDisplay}/>
                    <Route path={ `${this.props.match.url}/render4` } component={Topic4} />
                    <Route path={ `${this.props.match.url}/:topicId` } component={Topic} />
                </Switch>
            </div>
        );
    }
}

/*
export default class Topics extends React.Component {
    render() {
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                    <li><Link to={ `${this.props.match.url}/render1` }>Topic1</Link></li>
                    <li><Link to={ `${this.props.match.url}/render2` }>Topic2</Link></li>
                    <li><Link to={ `${this.props.match.url}/render3` }>Topic3</Link></li>
                </ul>
                <Route exact path={ this.props.match.url } component={DefaultDisplay}/>
                <Route path={ `${this.props.match.url}/:topicId` } component={Topic} />
            </div>
        );
    }
}*/