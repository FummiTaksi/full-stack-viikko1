import React from 'react'
import ContactList from './contact/ContactList'
import ContactForm from './contact/ContactForm'
import InputField from '../components/input/InputField'
import personService from "../services/persons"

class Phonebook extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: ''
      }
    }
  

    setPersons = () => {
      personService.getAll().then(response => {
        this.setState({ persons: response.data })
      })
    }

    componentWillMount = () => {
      this.setPersons();
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
      personService.create(newPerson).then((response) => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
    }

    addPerson = (e) => {
        e.preventDefault();
        const person = this.typedNameIsInTheList();
        if (person) {
          person.number = this.state.newNumber;
          personService.editPerson(person).then((response) => {
            this.setState({
              newName: '',
              newNumber: ''
            })
            this.setPersons();
          })
        }
        else {
          this.addPersonToListAndResetFields();
        }
    }

    deletePerson = (person) => {
      if (window.confirm("Haluatko varmasti poistaa henkilön " + person.name + " tiedot?")) {
          personService.deletePerson(person.id).then((response) => {}).then(() => {
          this.setPersons();
        })
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
          <h3>Lisää uusi kontakti tai muuta olemassa olevaa</h3>
          <ContactForm formObject = {formObject}/>    
          <ContactList 
            persons = {this.state.persons}
            filter = {this.state.filter}
            deleteFunction = {this.deletePerson}
          /> 
        </div>
      )
    }
  }

  export default Phonebook