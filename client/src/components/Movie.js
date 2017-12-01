import React, { Component } from "react";

class Movie extends Component {

	
	state = {
		result: [],
		userMovies: []
	};

	render() {
		const imgURL = "https://image.tmdb.org/t/p/w300/"

        return (
			<div>
				{
					this.props.movies.map((movieList) => (

						<div key={movieList.id} className="col s3 movieBox" >
							<div className="card">
								<div className="card-image responsive-img" >
									<img src={imgURL + movieList.poster_path} />
									<span className="card-title"><a onClick={this.handleClick} className="btn-floating btn waves-effect waves-light"><i className="material-icons">+</i></a></span>
								</div>
								{/*<div className="card-content movieInfo">
										<p>Title: {movieList.title}</p>
										<p>Genre: {movieList.genre_ids}</p>
										<p>Rating: {movieList.vote_average}</p>
										<p>ID: {movieList.id}</p>
								</div>*/}
							</div>
						</div>
					))
				}
				
			</div>
		)
	}
}
export default Movie;