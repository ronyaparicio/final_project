import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
            	<nav>
    				<div className="nav-wrapper">
      					<a href="#" className="brand-logo center">Logo</a>
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

			    <footer className="page-footer">
			        <div className="container">
			            <div className="row">
			            	<div className="col l6 s12">
				                <h5 className="white-text">Footer Content</h5>
				                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
			              	</div>
			              	<div className="col l4 offset-l2 s12">
				                <h5 className="white-text">Links</h5>
				                <ul>
				                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
				                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
				                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
				                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
				                </ul>
			                </div>
			            </div>
			        </div>
			        <div className="footer-copyright">
			            <div className="container">
			            	© 2014 Copyright Text
			            	<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
			            </div>
			        </div>
        </footer>
 			</div>	
        )
    }

}



export default Welcome;
