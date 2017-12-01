import React, { Component } from "react";
import API from "../utils/API";
// import Carousel from "../Components/Carousel";
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from ".././logo.png";




// const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {

		state = {
			posterPath: [],
			urlImage: [],
			urlBeginning: "https://image.tmdb.org/t/p/w370_and_h556_bestv2",
			email: "",
			password: ""
		};
	
	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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

	handleSignIn = event => {
		event.preventDefault();
		API.login({
			email: this.state.username,
			password: this.state.loginPassword
		}).then((res) => {
			console.log('idk')
			let data = res.data;
			if (data && data.token) {
				document.cookie = 'movieListUser=' + data.token + '; Path=/;'
				localStorage.setItem('movieListUserId', data.id + '');
				this.props.history.push('/movies');
			}
		})
	};

	signUp = ()=> {
		this.props.history.push('/welcome');
	}
 

	render() {
			this.state.posterPath.map((currentMovie) => {
	        this.state.urlImage.push(this.state.urlBeginning + currentMovie.poster_path);
					// this.setState({ movieList: urlImage })
			})

		return (
			<div>
					<nav id="navbar" className="indigo darken-1">
    				<div className="nav-wrapper indigo darken-1">

      					<a href="/" className="brand-logo center"><img id="logoWelcome" src={logo} alt="logo" /></a>
      					<div className="row">
				        	<form className="col s12" onSubmit={this.handleSignIn}>
				        		<div className="row">
				        			<div className="col s3">
				        				<a className="waves-effect waves-light yellow lighten-3 indigo-text btn right" onClick={this.signUp} style={{top: '50px'}} id="signiInButton">Sign-up</a>
				        			</div>
			      					<div className="input-field col s3 offset-s9">
												<input className="validate" type="email" name="username" value={this.state.username} onChange={this.handleInputChange}/>
												<label for="email">Email</label>
											</div>
											<div className="input-field col s3 offset-s9">
												<input className="validate" type="password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleInputChange}/>
												<label for="password">password</label>
											</div>
											<input className="waves-effect waves-light yellow lighten-3 indigo-text btn right" style={{right: '11px'}} id="signiInButton" type="submit" />
										</div>
									</form>
	    				</div>
	    			</div>
 				</nav>
 				<div className="indigo darken-1">
					<Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={18} infiniteLoop={true} autoPlay={true}>
						 {this.state.urlImage.map((currentImg, index) => {
											 		console.log(currentImg);
											 		return <div key={index}><img src={ currentImg } /></div>
											 	})
											 }
					</Carousel>
				</div>
				<Footer />
			</div>
		);
	}
}


export default SearchMoviesContainer;
