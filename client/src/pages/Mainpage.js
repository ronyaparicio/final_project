import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import UserSidebar from "../components/UserSidebar";

class Mainpage extends Component {
    render() {
        return (

            <div>
            	<Nav />

            	<div className="row">
				
					<div className="col s8">
						<h3> Most Popular Movies/TV</h3>
						<div className="card blue-grey darken-1 content">
				        	<div className="card-content white-text">
								<span className="card-title">Genre</span>
								<div className="row">
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title"><a className="waves-effect waves-light btn">Add to watch</a></span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title"><a className="btn-floating btn waves-effect waves-light red"><i className="material-icons">add</i></a></span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title">Card Title</span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title">Card Title</span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title">Card Title</span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
									<div className="col s4">
										<div className="card">
											<div className="card-image">
												<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" />
												<span className="card-title">Card Title</span>
											</div>
											<div className="card-content">
				              					<p>Title: Lego Movie</p>
				              					<p>Genre: Comedy
				              					</p>
				            				</div>
										</div>
									</div>
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