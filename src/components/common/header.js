import React from 'react';

var NavLink = require("react-router-dom").NavLink;

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    <img alt="placeholder" width="75" src="usa.png"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profiles" className="nav-link">Profiles</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/learn" className="nav-link">Learn</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }       
}