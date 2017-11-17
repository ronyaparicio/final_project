import React, { Component } from "react";

import Footer from "../components/Footer"

import API from "../utils/API"


class Welcome extends Component {

    state = {
        name: "",
        lastname: "",
		email: "",
		password: "",
		checkPassword: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
		});
		console.log('state:', this.state);
    };
    handleFormSubmit = event => {
		event.preventDefault();

		API.saveUser({
			name: this.state.name,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			checkPassword: this.state.checkPassword
		})
    };


    render() {
        return (
            <div>
            	<nav>
    				<div className="nav-wrapper">

      					<a href="/" className="brand-logo center"><img src="../images/logo.png" alt="logo" /></a>

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
									<form onSubmit={this.handleFormSubmit}>
										<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
										<input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} />
										<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
										<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
										<input type="password" name="checkPassword" placeholder="Password" value={this.state.checkPassword} onChange={this.handleInputChange} />

										<p>
											<input type="checkbox" />
											<label>Action</label>
										</p>
										<p>
											<input type="checkbox" />
											<label >Comedy</label>
										</p>
										<p>
											<input type="checkbox" />
											<label >Adventure</label>
										</p>
										<p>
											<input type="checkbox" />
											<label >Horror</label>
										</p>
										<p>
											<input type="checkbox" />
											<label >Anime</label>
										</p>
										<p>
											<input type="checkbox" />
											<label >Fiction</label>
										</p>
										<input type="submit" />
									</form>
								    
								</div>
			            	</div>
			            <div className="card-action">
			            	<a href="/movies">Submit</a>
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
