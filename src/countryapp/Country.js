import React from 'react'

class Country extends React.Component {

    render() {
        return (
            <li>{this.props.country.name}</li>
        )
    }
}

export default Country 