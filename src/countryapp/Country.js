import React from 'react'

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: {}
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.country.name}</h1>
                <p>capital: {this.props.country.capital}</p>
                <p>population: {this.props.country.population} </p>
                <img src = {this.props.country.flag} height="50" width="100" alt =""/>
            </div>
        )
    }
}

export default Country 