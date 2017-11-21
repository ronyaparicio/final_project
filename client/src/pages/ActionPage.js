import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Action from "../components/Action";
import UserSidebar from "../components/UserSidebar";

class ActionPage extends Component {
    render() {
        return (

            <div>
            	<Nav />

            	<div className="row">

					<UserSidebar />

					<div className="col s8">
						<h3>Action</h3>
						<div className="card blue-grey darken-1 content">
				        	<div className="card-content white-text">
								<span className="card-title">All</span>
								<div className="row">
									<Action />
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


export default ActionPage;