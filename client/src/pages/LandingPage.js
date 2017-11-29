import React, { Component } from "react";
import API from "../utils/API";
// import Carousel from "../Components/Carousel";
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



// const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {

		state = {
			posterPath: [],
			urlImage: [],
			urlBeginning: "https://image.tmdb.org/t/p/w370_and_h556_bestv2"
		};
	
	componentDidMount() {
		this.topMovies();
		// this.setState({posterPath:posterPath});
	
	};

	topMovies = () => {
		API.topMovies()
			.then(res => this.setState({ posterPath: res.data.results}))
			.catch(err => console.log(err));
	};

	// getPosterPath = () => {
	// 	this.state.posterPath.map((movieList) => (
							
	// 							poster = {url, movieList.poster_path} 
	// 					))
	// };

	// searchMovieDB = query => {
	// 	API.moviedetails(query)
	// 		.then(res => this.setState({ posterPath: res.data}))
	// 		.catch(err => console.log(err));
	// };


 // When the form is submitted, search the MovieDB API for the value of `this.state.search`
	// handleFormSubmit = event => {
 //    	event.preventDefault();
 //    	this.searchMovieDB(this.state.search);
	// };


 // <p className="legend">Legend {this.index + 1}</p>

 

	render() {
			this.state.posterPath.map((currentMovie) => {
	        this.state.urlImage.push(this.state.urlBeginning + currentMovie.poster_path);
					// this.setState({ movieList: urlImage })
			})

		return (
			<div>
					<Nav />
					<Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={18} infiniteLoop={true} autoPlay={true}>
						 {this.state.urlImage.map((currentImg, index) => {
											 		console.log(currentImg);
											 		return <div key={index}><img src={ currentImg } /></div>
											 	})
											 }
					</Carousel>
				<Footer />
			</div>
		);
	}
}


export default SearchMoviesContainer;
