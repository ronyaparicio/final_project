import React, { Component } from "react";
import API from "../utils/API"
class Movie extends Component {

	constructor(){
	    super();
		this.state = {
	        
	        color: 'green',
	        icon: 'add',
	        result: [],
	        userMovies: []
	    };
	}

	componentDidMount() {
		this.topMovies();
		this.getUserMovies();
	}

	topMovies = () => {
        API.topMovies()
            .then(res => this.setState({ result: res.data.results}))
            .catch(err => console.log(err));
    }

    getUserMovies = () => {
    	// API.getUserMovies()
    		// .then(res => this.setState({ userMovies: res.data.results}))
      //       .catch(err => console.log(err));
    }

    isMovieAUserMovie = (id) => {
    	this.state.userMovies.find(movie => {
    		return movie.id === id;
    	}) 
    }
	
    handleClick = event => {
    	console.log(event)
    	const element = event.target;
    	const { id, isInUserMovies } = element;
    	console.log(isInUserMovies);

    	// TODO: change to green if wasn't in list or red if was
    	// element.classList.add('green');
    	// API.addMovieToUser(id, userId);


        // if (this.state.color === 'green'){
        //     this.setState({color: 'red'});
        // } else {
        //     this.setState({color: 'green'});
        // }

        // if (this.state.icon === 'add') {
        // 		this.setState({icon: 'remove'});
        // } else {
        // 	this.setState({icon: 'add'});
        // }
    }

	render() {
		const imgURL = "https://image.tmdb.org/t/p/w300/"

        return (
			<div>
				{
					this.state.result.map((movie) => {
						let isAUserMovie = this.isMovieAUserMovie(movie.id) ? true : false;

						return (
							<div className="col s4 movieBox">
								<div className="card">
									<div className="card-image">
										<img src={imgURL + movie.poster_path} />
										<span className="card-title">
											<!-- dynamically add gree/red class based on isAUserMovie (t/f) -->
											<i 
												isInUserMovies={isAUserMovie}
												onClick={this.handleClick}
												id={movie.id}
												className="material-icons btn-floating btn waves-effect waves-light">{this.state.icon}</i>
											</span>
									</div>
									<div className="card-content movieInfo">
											<p>Title: {movie.title}</p>
											<p>Genre: {movie.genre_ids}</p>
											<p>Rating: {movie.vote_average}</p>
									</div>
								</div>
							</div>
						);
					})
				}
				
			</div>
		)
	}
}
export default Movie;