import React, { Component } from "react";

class Td extends Component {

    state = {
        userMovies: []
    };




    render() {

        return (
            <div>
            {
                this.props.movies.map((userMovies)=> {
                    <td>{userMovies.name}</td>


                })

            }
            </div>
        )
    }

}

export default Td;