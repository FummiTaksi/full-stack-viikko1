import React from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

class Phonebook extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas' }
        ],
        newName: ''
      }
    }
  


    typedNameIsInTheList = () => {
      const person = this.state.persons.find((person) => {
        return person.name === this.state.newName
      })
       return person;
    }

    addPerson = (e) => {
        e.preventDefault();
        const person = this.typedNameIsInTheList();
        if (person) {
          window.alert(person.name  + " is already in the list!");
          this.setState({
            newName: ''
          })
        }
        else {
          const newPerson = {name: this.state.newName}
          const persons = this.state.persons.concat(newPerson);
          this.setState({
              persons: persons,
              newName: ''
          })
        }
    }

    handleNameChange = (e) => {
        this.setState({ newName: e.target.value })
    }

    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <ContactForm 
              addFunction = {this.addPerson} 
              nameValue = {this.state.newName}
              changeFunction = {this.handleNameChange}
          />    
          <ContactList persons = {this.state.persons}/> 
        </div>
      )
    }
  }

  export default Phonebook