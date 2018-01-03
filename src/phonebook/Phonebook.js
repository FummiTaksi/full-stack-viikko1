import React from 'react'
import ContactList from './contact/ContactList'
import ContactForm from './contact/ContactForm'
import InputField from './input/InputField'

class Phonebook extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas', number: '040-123456' },
          { name: 'Martti Tienari', number: '040-123456' },
          { name: 'Arto Järvinen', number: '040-123456' },
          { name: 'Lea Kutvonen', number: '040-123456' }
        ],
        newName: '',
        newNumber: '',
        filter: ''
      }
    }
  


    typedNameIsInTheList = () => {
      const person = this.state.persons.find((person) => {
        return person.name === this.state.newName
      })
       return person;
    }

    addPersonToListAndResetFields = () => {
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      const persons = this.state.persons.concat(newPerson);
      this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
      })
    }

    addPerson = (e) => {
        e.preventDefault();
        const person = this.typedNameIsInTheList();
        if (person) {
          window.alert(person.name  + " is already in the list!");
        }
        else {
          this.addPersonToListAndResetFields();
        }
    }

    handleNameChange = (e) => {
        this.setState({ newName: e.target.value })
    }

    handleNumberChange = (e) => {
      this.setState({ newNumber: e.target.value })
    }

    handleFilterChange = (e) => {
      this.setState({filter: e.target.value})
    }

    render() {
      const name = {
        text: "nimi: ",
        value: this.state.newName, 
        changeFunction: this.handleNameChange
      };

      const number = {
        text: "numero: ",
        value: this.state.newNumber,
        changeFunction: this.handleNumberChange
      }
      const inputObjects = [name, number];
      const formObject = {
        addFunction: this.addPerson, 
        inputObjects: inputObjects
      };

      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <InputField
            nameOfField = "rajaa näytettäviä "
            value = {this.state.filter}
            changeFunction = {this.handleFilterChange}
          />
          <br/>
          <h3>Lisää uusi kontakti</h3>
          <ContactForm formObject = {formObject}/>    
          <ContactList 
            persons = {this.state.persons}
            filter = {this.state.filter}
          /> 
        </div>
      )
    }
  }

  export default Phonebook