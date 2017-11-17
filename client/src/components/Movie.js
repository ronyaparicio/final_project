
import React, { Component } from "react";
class Movie extends Component {

	constructor(){
	    super();
		this.state = {
	        
	        color: 'green',
	        icon: 'add'
	    }
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
        return (
			<div>
				<div className="col s4">
					<div className="card">
						<div className="card-image">
							<img src="https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg" alt="movie-title" />
							<span className="card-title"><a id={this.state.color} onClick={this.handleClick} className="btn-floating btn waves-effect waves-light"><i className="material-icons">{this.state.icon}</i></a></span>
						</div>
						<div className="card-content">
								<p>Title: Lego Movie</p>
								<p>Genre: Comedy</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Movie;