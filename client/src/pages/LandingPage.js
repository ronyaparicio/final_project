import React, { Component } from "react";
import API from "../utils/API";
// import Carousel from "../Components/Carousel";
import {Carousel} from "react-materialize";

const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {
	constructor () {
		super();
		state = {
			result: [],
			search: "",
			isReady: false,
			url: "https://image.tmdb.org/t/p/w370_and_h556_bestv2"
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

	// this.state.result.map((movielist) => )

	render() {
		return(
			<div>
				{
					<Carousel images={[
							this.state.result.map((movielist) => (
								'this.state.url + movielist.poster_path'
							))
						]} />
				}
			</div>
		)
	}
}
			// <h2>{this.state.result.title}</h2>
export default SearchMoviesContainer;

