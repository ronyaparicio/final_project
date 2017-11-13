import React, { Component } from "react";
import Footer from "../components/Footer"

class Welcome extends Component {
    render() {
        return (
            <div>
            	<nav>
    				<div className="nav-wrapper">
      					<a href="#" className="brand-logo center"><img src="../images/logo.png" alt="logo" /></a>
      					<ul id="nav-mobile" className="right hide-on-med-and-down">
					        <li>
					        	<div className="input-field">
						        	<input id="email" type="text" className="validate" />
						        	<label htmlFor="email">Email</label>
        						</div>
					        </li>
					        <li>
					        	<div className="input-field">
						        	<input id="password" type="password" className="validate" />
						        	<label htmlFor="password">Password</label>
        						</div>
					        </li>
					    </ul>
    				</div>
 				</nav>

 				 <div className="row">
			        <div className="col s8 offset-s2">
			        	<div className="card blue-grey darken-1">
			            	<div className="card-content white-text">
			              		<span className="card-title">Sign Up</span>
			              		<div className="row">
								    <form className="col s12">
								    	<div className="row">
								        	<div className="input-field col s6">
								          		<input id="first_name" type="text" className="validate" />
								          		<label htmlFor="first_name">First Name</label>
								        	</div>
									        <div className="input-field col s6">
									          <input id="last_name" type="text" className="validate" />
									          <label htmlFor="last_name">Last Name</label>
									        </div>
								      	</div>
								      	<div className="row">
									        <div className="input-field col s12">
										        <input id="password" type="password" className="validate" />
										        <label htmlFor="password">Password</label>
									        </div>
								      	</div>
									    <div className="row">
									        <div className="input-field col s12">
										        <input id="email" type="email" className="validate" />
										        <label htmlFor="email">Email</label>
									        </div>
									    </div>
								    </form>
								</div>
			            	</div>
			            <div className="card-action">
			            	<a href="#">Submit</a>
			            </div>
			          </div>
			        </div>
			    </div>

			    <Footer />
 			</div>	
        )
    }

}



export default Welcome;
