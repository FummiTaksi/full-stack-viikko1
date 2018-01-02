import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  
      return (
          <h1>{props.teksti}</h1>
      )
  }
  
  const Osa = (props) => {
      return (
          <p>{props.osa.nimi} {props.osa.tehtavaMaara}</p>
      )
  }
  
  const Sisalto = (props) => {
      let elementit = [];
      props.osat.forEach((osa) => {
        elementit.push(<Osa osa = {osa} />);
      })
      return elementit;
  }
  
  const Yhteensa = (props) => {
      let summa = 0;
      props.osat.forEach((osa) => {
          summa += osa.tehtavaMaara
      })
      return <p>yhteensä {summa} tehtävää</p>
  }
  
  const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavaMaara: 10,
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavaMaara: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavaMaara: 14
      }
    ]

    return (
      <div>
        <Otsikko teksti = {kurssi} />
        <Sisalto osat = {osat} />
        <Yhteensa osat = {osat} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))