import React from "react";

import logo from ".././logo.png"

const Nav = () =>

<div>
	<nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center"><img id="logo" src={logo} alt="logo" /></a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/profile">Profile</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a className="active" href="#test1">All</a></li>
        <li className="tab"><a href="#test2">Action</a></li>
        <li className="tab"><a href="#test3">Drama</a></li>
        <li className="tab"><a href="#test4">Comedy</a></li>
      </ul>
    </div>
  </nav>
</div>
export default Nav;