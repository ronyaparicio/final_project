import React, { Component } from "react";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import UserSidebar from "../components/UserSidebar";
import API from "../utils/API";
import logo from ".././logo.png"

class Mainpage extends Component {

	state = {
		genre: 28,
		movies: [],
		Adventure: 12
	}

	componentDidMount() {
		// regex();

		API.movieSearch(
			 this.state.genre
		).then((res) => {
			this.setState({ movies: res.data.results })
			
		}).catch((err)=> {
			console.log(err)
		})
		let userId = localStorage.getItem('movieListUserId');
		API.userMovies(userId);

	}

	genreChange = (genre)=> {
		API.movieSearch(
			genre
		).then((res) => {
			this.setState({ movies: res.data.results })

		}).catch((err) => {
			console.log(err)
		})

	}
	handleGenreChange = (event)=> {
		console.log(event.target);
		let { name } = event.target;
		console.log(name)
		this.genreChange(name)
		this.setState({
			genre: name
		});
		console.log(this.state.genre);
	}

    render() {

    	
        return (

            <div>
				<div>
					<nav className="nav-extended indigo darken-1">
						<div className="nav-wrapper indigo darken-1">
							<a href="movies" className="brand-logo center"><img id="logo" src={logo} alt="logo" /></a>
							<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li><a href="/profile">Profile</a></li>
							</ul>
						</div>
						<div className="nav-content indigo">
							<ul className="tabs tabs-transparent">
								<li className="tab"><a onClick={this.handleGenreChange}  className="active">All</a></li>
								<li className="tab"><a name="28" onClick={this.handleGenreChange}  >Action</a></li>
								<li className="tab"><a name="12" onClick={this.handleGenreChange}  >Adventure</a></li>
								<li className="tab"><a name="16" onClick={this.handleGenreChange}  >Animation</a></li>
								<li className="tab"><a name="35" onClick={this.handleGenreChange}  >Comedy</a></li>
								<li className="tab"><a name="80" onClick={this.handleGenreChange}  >Crime</a></li>
								<li className="tab"><a name="99" onClick={this.handleGenreChange}  >Documentary</a></li>
								<li className="tab"><a name="18" onClick={this.handleGenreChange}  >Drama</a></li>
								<li className="tab"><a name="10751" onClick={this.handleGenreChange}  >Family</a></li>
								<li className="tab"><a name="14" onClick={this.handleGenreChange}  >Fantasy</a></li>
								<li className="tab"><a name="36" onClick={this.handleGenreChange}  >History</a></li>
								<li className="tab"><a name="27" onClick={this.handleGenreChange}  >Horror</a></li>
							</ul>
						</div>
					</nav>
				</div>
            	<div className="row">
					<div className="container">
						<div className="col s12">
							<h3 id="title">{this.state.genre}</h3>
							<div className="card indigo lighten-4 content">
								<div className="card-content white-text">
									<div className="row">
										<Movie movies={this.state.movies} />
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