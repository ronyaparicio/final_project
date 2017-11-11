import React, { Component } from "react";

class Welcome extends Component {

    state = {
        name: [],
        lastname: "",
        email: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
      
    };


    render() {
        return (
            <div>
                
            </div>
        )
    }

}


export default Welcome;
