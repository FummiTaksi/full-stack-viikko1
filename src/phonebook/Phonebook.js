import React from 'react'
import ContactList from './contact/ContactList'
import ContactForm from './contact/ContactForm'
import InputField from '../components/input/InputField'
import personService from "../services/persons"
import Notification from "../components/notification/Notification"

class Phonebook extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: '',
        notificationMessage: null
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

    addPersonToListAndResetFields = (person) => {
      personService.create(person).then((response) => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
      this.alterNotification(person.name + " was added to contacts succesfully!");
    }

    findPersonsIndex = (person) => {
      for (let i = 0; i < this.state.persons.length; i++) {
        if (person.name === this.state.persons[i].name) {
          return i;
        }
      }
      return -1;
    }

    addPerson = (e) => {
        e.preventDefault();
        const person = this.typedNameIsInTheList();
        if (person) {
          const oldNumber = person.number;
          person.number = this.state.newNumber;
          personService.editPerson(person).then((response) => {
            this.setState({
              newName: '',
              newNumber: ''
            })
            this.setPersons();
            this.alterNotification(person.name + "'s number was changed from " +
                                   oldNumber + " to " + person.number);
          }).catch((error) => {
            const index = this.findPersonsIndex(person);
            const copyList = this.state.persons.slice();
            copyList.splice(index, 1);
            this.setState({
              persons: copyList
            })
            this.addPersonToListAndResetFields(person);
        })
        }
        else {
          const person = {name: this.state.newName, number: this.state.newNumber}
          this.addPersonToListAndResetFields(person);
        }
    }

    alterNotification = (message) => {
      this.setState({
        notificationMessage: message
      })
      setTimeout(() => {
        this.setState({notificationMessage: null})
      }, 5000)
    }

    deletePerson = (person) => {
      if (window.confirm("Haluatko varmasti poistaa henkilön " + person.name + " tiedot?")) {
          personService.deletePerson(person.id).then((response) => {}).then(() => {
          this.setPersons();
          this.alterNotification(person.name  + " was deleted successfully!");
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
          <Notification message = {this.state.notificationMessage}/>
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