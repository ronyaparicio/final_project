import React, { Component } from "react";
import API from "../utils/API";

const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {
	constructor () {
		super();
		this.state = {
			result: [],
			search: "",
			isReady: false

		};
	}
	componentDidMount() {
		this.topMovies();
	}


	topMovies = () => {
		API.topMovies()
			.then(res => this.setState({ result: res.data.results}))
			.catch(err => console.log(err));
	}

	searchMovieDB = query => {
		API.moviedetails(query)
			.then(res => this.setState({ result: res.data}))
			.catch(err => console.log(err));
	};


  	handleInputChange = event => {
    	const value = event.target.value;
    	const name = event.target.name;
    	this.setState({
      		[name]: value
    	});
  	};

 // When the form is submitted, search the MovieDB API for the value of `this.state.search`
	handleFormSubmit = event => {
    	event.preventDefault();
    	this.searchMovieDB(this.state.search);
	};

	render() {
		return(
			<div>
				{
					this.state.result.map((movielist) => (
						<div>
							<h2>{movielist.title}</h2>
							<h4>{movielist.overview}</h4>
							<div> 
								{movielist.poster_path}</div>

						</div>
						))
				}
			</div>
		)
	}
}
			// <h2>{this.state.result.title}</h2>
export default SearchMoviesContainer;

