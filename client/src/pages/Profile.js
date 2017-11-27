import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import UserSidebar from "../components/UserSidebar";

class Profile extends Component {
	render() {
		return (
			<div>
				<Nav />

				<div className="row">
					<UserSidebar />

					<div className="col s8">
						<h3 id="title"> Your List</h3>
						<div className="card indigo lighten-4 content">
				        	<div className="card-content white-text">
								<span className="card-title">Genre</span>
								<div className="row">
								
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default Profile;
