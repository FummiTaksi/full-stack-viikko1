import React from 'react'
import ReactDOM from 'react-dom'

class Otsikko extends React.Component {

    render() {
        return (
            <h1>{this.props.teksti}</h1>
        )
    }
}

export default Otsikko