import React from 'react'
import ReactDOM from 'react-dom'
import Osa from './Osa'

class Sisalto extends React.Component {

    render() {
        return this.props.osat.map((osa) => {
            return <Osa key  ={osa.nimi} osa = {osa} />
        })
    }
}

export default Sisalto