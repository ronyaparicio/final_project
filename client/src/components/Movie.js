import React, { Component } from "react";
import API from "../utils/API"
class Movie extends Component {

	constructor(){
	    super();
		this.state = {
	        
	        color: 'green',
	        icon: 'add',
	        result: []
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
	
    handleClick = event => {
        if (this.state.color === 'green'){
            this.setState({color: 'red'});
        } else {
            this.setState({color: 'green'});
        }

        if (this.state.icon === 'add') {
        		this.setState({icon: 'remove'});
        } else {
        	this.setState({icon: 'add'});
        }
    }

	render() {
		const imgURL = "https://image.tmdb.org/t/p/w300/"

        return (
			<div>
				{
					this.state.result.map((movieList) => (

						<div className="col s4">
							<div className="card">
								<div className="card-image">
									<img src={imgURL + movieList.poster_path} />
									<span className="card-title"><a id={this.state.color} onClick={this.handleClick} className="btn-floating btn waves-effect waves-light"><i className="material-icons">{this.state.icon}</i></a></span>
								</div>
								<div className="card-content">
										<p>Title: {movieList.title}</p>
										<p>Genre: {movieList.genre_ids}</p>
										<p>Rating: {movieList.vote_average}</p>
								</div>
							</div>
						</div>
					))
				}
				
			</div>
		)
	}
}
export default Movie;