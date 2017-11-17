import React, { Component } from "react";
import Nav from "../components/Nav";
import Container from "../components/Grid";
import Movie from "../components/Movie";

class Profile extends Component {
    render() {
        return (
            <Container>
            	<Nav>
            		
            	</Nav>
            	<img src={'https://image.tmdb.org/t/p/w276_and_h350_bestv2/5rOcicCrTCWye0O2S3dnbnWaCr1.jpg'}>
            		</img>
            </Container>
        )
    }

}


export default Profile;
