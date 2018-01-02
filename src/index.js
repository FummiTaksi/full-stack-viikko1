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
      return <p>yhteensä {props.yhteensa} tehtävää</p>
  }

  const laskeSumma = (osat) => {
    let summa = 0;
    osat.forEach((osa) => {
        summa += osa.tehtavaMaara
    })
    return summa;
  }
  
  const App = () => {

    const kurssi = {
       nimi: 'Half Stack -sovelluskehitys',
       osat : [
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
    }

    const yhteensa = laskeSumma(kurssi.osat);

    return (
      <div>
        <Hello name="Arto" age={36} />
        <Otsikko teksti = {kurssi.nimi} />
        <Sisalto osat = {kurssi.osat} />
        <Yhteensa yhteensa = {yhteensa} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))