var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route>
        <DefaultRoute path="/" handler={require("./components/home/homePage")} />
        <Route name="about" handler={require("./components/about/aboutPage")}/>
        <Route name="learn" handler={require("./components/learn/learnPage")}/>
        <Route name="profiles" handler={require("./components/profiles/profilesPage")}/>
  </Route>
);

module.exports = routes;