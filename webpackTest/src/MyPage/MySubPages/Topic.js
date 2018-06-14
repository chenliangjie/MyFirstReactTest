import React, { Component } from "react";
import "./topic.css";

export default class Topic extends React.Component {
    constructor(props) {
        super(props);

        let idStr = this.props.match.params.topicId;
        if(idStr == "render1") {
            this.state = {showRender3: true};
        } else {
            this.state = {showRender3: false};
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        let idStr = nextProps.match.params.topicId;
        if(idStr == "render1") {
            this.setState({showRender3: true});
        } else {
            this.setState({showRender3: false});
        }
    }

    componentWillUnmount() {
    }

    handleClick() {
        this.props.history.push("/");
    }

    render() {
        return(
            <div className="topic_div">
                <h3>{this.props.match.params.topicId}</h3>
                {this.state.showRender3 ? (<button onClick={this.handleClick}>返回至Home</button>) : (<div></div>)}
            </div>
        );
    }
}