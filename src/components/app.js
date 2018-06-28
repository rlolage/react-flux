/* eslint-disable strict */

import React from 'react';
import {
    Route,
    HashRouter
  } from "react-router-dom";
//$ = jQuery = require("jquery"); // This is required by bootstrap to be in the global namespace.
var Header = require("./common/header");
var Home = require("../components/home/homePage");
var Learn = require("../components/learn/learnPage");
var About = require("../components/about/aboutPage");

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Header/>
                    </div>
                    <div className="content">
                        <Route path="/" component={Home}/>
                        <Route path="/learn" component={Learn}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}