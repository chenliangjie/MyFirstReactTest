import React, { Component } from "react";
import "./Topic4.css";
import axios from "axios";

export default class Topic4 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('/v2/book/search', {
            params: {
                q: '基础'
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {
        return(
            <div className="topic4_div">
                <h1>Topic4</h1>
            </div>
        );
    }
}