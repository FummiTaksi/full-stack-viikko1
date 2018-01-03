import React from 'react'
import ReactDOM from 'react-dom'
import Otsikko from './Otsikko'
import Osa from './Osa'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'


const laskeSumma = (osat) => {
    return osat.reduce(function (summa, osa) {
        return summa + osa.tehtavia;
    }, 0)
  }

  class Kurssi extends React.Component {

        render() {
            const yhteensa = laskeSumma(this.props.kurssi.osat);
            return (
                <div>
                  <Otsikko teksti = {this.props.kurssi.nimi} />
                  <Sisalto osat = {this.props.kurssi.osat} />
                  <Yhteensa yhteensa = {yhteensa} />
                </div>
              )
        }
    }

    export default Kurssi