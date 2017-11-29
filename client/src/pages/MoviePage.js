import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserSidebar from "../components/UserSidebar";
import API from "../utils/API";
import logo from ".././logo.png"

class MoviePage extends Component {
	state = {
		
	}

	render() {
		return (
			<div>
				<Nav />

				
					<div className="row">
						<div className="col s3">
							<div className="card">
								<div className="card-image">
									<img src="http://materializecss.com/images/sample-1.jpg" />
								</div>
								<div class="card-content">
									<p>Genre(s):</p>
									<p>Rating:</p>
									<p>Release Date:</p>
								</div>
							</div>
						</div>
						<div className="col s9" id="movieTitles">
							<div className="row">
								<div className="col s9 offset-s3">
									<h3>Movie Title</h3>
								</div>
								<div className="col s10">
						        	<div className="card-panel indigo lighten-4">
						          		<h5>Description:</h5>
						          		<p></p>
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

export default MoviePage;