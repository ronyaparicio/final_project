import React, { Component } from "react";
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
    };
    handleFormSubmit = event => {
		event.preventDefault();
		API.saveUser({
			name: this.state.name,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password
		})
    };


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
				 <div className="container">
					<form onSubmit={this.handleFormSubmit}>
						<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
						<input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} />
						<input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
						<input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
						<input type="text" name="checkPassword" placeholder="Password" value={this.state.checkPassword} onChange={this.handleInputChange} />
						<input type="submit" />
					</form>
				</div>
 			</div>	

        )
    }
}



export default Welcome;
