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
      for (let i = 0; i < props.osat.length; i++) {
          elementit.push(<Osa osa = {props.osat[i]} />);
      }
      return elementit;
  }
  
  const Yhteensa = (props) => {
      var summa = 0;
      for (let i = 0; i < props.osat.length; i++) {
          let osa = props.osat[i];
          summa += osa.tehtavaMaara;
      }
      return <p>yhteensä {summa} tehtävää</p>
  }
  
  const lisaaOsaListaan = (lista, nimi, tehtavat) => {
      lista.push({nimi: nimi, tehtavaMaara: tehtavat});
  }
  
  const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const elementit = [];
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    lisaaOsaListaan(elementit, osa1, tehtavia1);
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    lisaaOsaListaan(elementit, osa2 , tehtavia2);
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
    lisaaOsaListaan(elementit, osa3 , tehtavia3);
  
    return (
      <div>
        <Otsikko teksti = 'Half Stack -sovelluskehitys' />
        <Sisalto osat = {elementit} />
        <Yhteensa osat = {elementit} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))