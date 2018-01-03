import React from 'react'
import ReactDOM from 'react-dom'
import Otsikko from './Otsikko'
import Osa from './Osa'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'


const laskeSumma = (osat) => {
    return osat.reduce(function (summa, osa) {
        return summa + osa.tehtavaMaara;
    }, 0)
  }

  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat : [
     {
       nimi: 'Reactin perusteet',
       tehtavaMaara: 10,
       id: 1
     },
     {
       nimi: 'Tiedonvälitys propseilla',
       tehtavaMaara: 7,
       id: 2
     },
     {
       nimi: 'Komponenttien tila',
       tehtavaMaara: 14,
       id: 3
     }
   ]
 }

  class Kurssi extends React.Component {

        render() {
            const yhteensa = laskeSumma(kurssi.osat);
            return (
                <div>
                  <Otsikko teksti = {kurssi.nimi} />
                  <Sisalto osat = {kurssi.osat} />
                  <Yhteensa yhteensa = {yhteensa} />
                </div>
              )
        }
    }

    export default Kurssi