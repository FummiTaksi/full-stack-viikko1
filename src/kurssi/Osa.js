import React from 'react'
import ReactDOM from 'react-dom'

class Osa extends React.Component {
    
        render() {
            return (
                <li>{this.props.osa.nimi}, tehtäviä {this.props.osa.tehtavia}</li>
            )
        }
    }
    
export default Osa