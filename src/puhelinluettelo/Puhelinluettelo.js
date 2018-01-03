import React from 'react'

class Puhelinluettelo extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas' }
        ],
        newName: ''
      }
    }
  


    addPerson = (e) => {
        e.preventDefault();
        const newPerson = {name: this.state.newName}
        const persons = this.state.persons.concat(newPerson);
        this.setState({
            persons: persons,
            newName: ''
        })
    }

    handleNoteChange = (e) => {
        this.setState({ newName: e.target.value })
    }

    render() {
      const persons = this.state.persons.map((person) => {
          return <li key = {person.name}>{person.name}</li>;
      })
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <form onSubmit={this.addPerson}>
            <div>
              nimi:
              <input
                value={this.state.newName}
                onChange={this.handleNoteChange}
               />
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          <ul>
            {persons}
          </ul>    
        </div>
      )
    }
  }

  export default Puhelinluettelo