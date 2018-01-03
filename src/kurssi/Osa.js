import React from 'react'
import ReactDOM from 'react-dom'

class Osa extends React.Component {
    
        render() {
            return (
                <p>{this.props.osa.nimi} {this.props.osa.tehtavaMaara}</p>
            )
        }
    }
    
export default Osa