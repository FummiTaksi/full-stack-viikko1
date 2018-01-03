import React from 'react'
import Osa from './Osa'

class Sisalto extends React.Component {


    palautaOsat = () => {
        return this.props.osat.map((osa) => {
            return <Osa key  ={osa.nimi} osa = {osa} />
        })
    }

    render() {     
        return (
            <div>
                <h3>Sisältö:</h3>
                {this.palautaOsat()}
            </div>
        )
    }
}

export default Sisalto