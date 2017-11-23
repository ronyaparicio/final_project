import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
// import UserSidebar from "../components/UserSidebar";

class Mainpage extends Component {
    render() {
        return (

            <div>
            	<Nav />

            	<div className="row">

					

					<div className="col s8 offset-s2">
						<h3 id="title"> Most Popular Movies/TV</h3>
						<div className="card indigo lighten-4 content">
				        	<div className="card-content white-text">
								<span className="card-title">All</span>
								<div className="row">
									<Movie />
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


export default Mainpage;