import React from "react";
import {Carousel, Col, Button, Modal} from 'react-materialize';

const MainPage = () => 
	<div>
		<nav>
		    <div className="nav-wrapper">
		    	<a href="#" className="brand-logo center">Logo</a>
		    </div>
		</nav>

		<div className="container">
			<div className="row">
				<h3>Top Movies</h3>
			</div>
			<div id="carousel" className="row">
				<Carousel images={[
					'https://static.rogerebert.com/uploads/movie/movie_poster/no-country-for-old-men-2007/large_6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
					'https://images-na.ssl-images-amazon.com/images/I/81HOzr3eD7L._AC_UL320_SR216,320_.jpg',
					'https://i.ytimg.com/vi/vgEAkOtl1FE/movieposter.jpg',
					'https://resizing.flixster.com/8Q4EfXqQe053ok8Wt8nb1XO3dRs=/206x305/v1.bTsxMTE3Nzc2MTtqOzE3NTg5OzEyMDA7ODAwOzEyMDA',
					'https://upload.wikimedia.org/wikipedia/en/9/96/Paul_poster.jpg'
				]} />
			</div>
			<div className="row">
				<Col s={2} className='grid-example'></Col>
				<Col s={4} className='grid-example'>
					<Modal
						header='Modal Header'
						bottomSheet
						trigger={<Button>Sign In</Button>}>
						
					</Modal>
				</Col>
				<Col s={4} className='grid-example'>

				</Col>
				<Col s={2} className='grid-example'></Col>
			</div>
		</div>
		

	</div>

export default MainPage;