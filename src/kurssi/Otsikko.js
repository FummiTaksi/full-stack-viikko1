import React from 'react'

class Otsikko extends React.Component {

    render() {
        return (
            <h1>{this.props.teksti}</h1>
        )
    }
}

export default Otsikko