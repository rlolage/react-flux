import React, { Component } from "react";
import Header from "./components/common/header";
import {
    Route,
    HashRouter
  } from "react-router-dom";
import HomePage from "./components/home/homePage";
import ProfilesPage from "./components/profiles/profilesPage";
import LearnPage from "./components/learn/learnPage";
import AboutPage from "./components/about/aboutPage";
import 'bootstrap/dist/css/bootstrap.css'

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <Header/>
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/profiles" component={ProfilesPage}/>
            <Route path="/learn" component={LearnPage}/>
            <Route path="/about" component={AboutPage}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;