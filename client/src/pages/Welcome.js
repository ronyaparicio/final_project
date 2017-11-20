import React, { Component } from "react";

import Footer from "../components/Footer";
import API from "../utils/API";
import logo from ".././logo.png";


class Welcome extends Component {

    state = {
        name: "",
        lastname: "",
		email: "",
		password: "",
		checkPassword: "",
		username: "",
		loginPassword: "",
		genre: [],
		friends: [],
		redirect: false
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
			password: this.state.password,
			checkPassword: this.state.checkPassword
		}).then((res) => {
			console.log(res);
			let data = res.data;
			if (data && data.token) {
				document.cookie = 'movieListUser=' + data.token + '; Path=/;'
				localStorage.setItem('movieListUserId', data.id + '');
				this.props.history.push('/movies');
			}
		})
	};
	handleSignIn = event => {
		event.preventDefault();

		API.login({
			email: this.state.username,
			password: this.state.loginPassword
		}).then((res) => {
			let data = res.data;
			if (data && data.token) {
				document.cookie = 'movieListUser=' + data.token + '; Path=/;'
				localStorage.setItem('movieListUserId', data.id + '');
				
				this.props.history.push('/movies');
			}
		})
	};


    render() {
		
        return (
            <div>
            	<nav id="navbar">
    				<div className="nav-wrapper">

      					<a href="/" className="brand-logo center"><img id="logo" src={logo} alt="logo" /></a>

      					<ul id="nav-mobile" className="right hide-on-med-and-down">
					        <li>
					        	<form onSubmit={this.handleSignIn}>
									<input type="email" name="username" placeholder="email" value={this.state.username} onChange={this.handleInputChange}/>
									<input type="password" name="loginPassword" placeholder="Password" value={this.state.loginPassword} onChange={this.handleInputChange}/>
									<input type="submit" />
								</form>
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
