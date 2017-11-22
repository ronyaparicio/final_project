import React, { Component } from "react";
import API from "../utils/API";
// import Carousel from "../Components/Carousel";
import { Carousel } from "react-responsive-carousel";

// const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {
	constructor() {
		super();
		this.state = {
			result: [],
			posterImage: []	}
		};
	
	componentDidMount() {
		this.topMovies();
		// this.getPosterPath();
		// console.log('poster', poster);
	
	};

	topMovies = () => {
		API.topMovies()
			.then(res => this.setState({ result: res.data.results}))
			.catch(err => console.log(err));
	};

	// getPosterPath = () => {
	// 	this.state.result.map((movieList) => (
							
	// 							poster = {url, movieList.poster_path} 
	// 					))
	// };

	// searchMovieDB = query => {
	// 	API.moviedetails(query)
	// 		.then(res => this.setState({ result: res.data}))
	// 		.catch(err => console.log(err));
	// };


 // When the form is submitted, search the MovieDB API for the value of `this.state.search`
	// handleFormSubmit = event => {
 //    	event.preventDefault();
 //    	this.searchMovieDB(this.state.search);
	// };


 // <p className="legend">Legend {this.index + 1}</p>

	render() {
			const url = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
			let joined = [];
			this.state.result.map((currentMovie) => {
	        joined.push(url + currentMovie.poster_path);
					// this.setState({ movieList: joined })
			})

		return (
					<Carousel>
						{joined.map((currentImg, index) => {
					 		return <div key={index}><img src={ this.currentImg } /></div>
					 	})
					 }
					</Carousel>
		);
	}
}


export default SearchMoviesContainer;
