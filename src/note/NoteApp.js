import React from 'react'
import Note from './Note'
import axios from 'axios'

class NoteApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          notes: props.notes ,
          new_note: '',
          showAll: true
        }
      }

    toggleVisible = () => {
      this.setState({showAll: !this.state.showAll})
    }

    addNote = (e) => {
      e.preventDefault()
      const noteObject = {
        content: this.state.new_note,
        date: new Date().new,
        important: Math.random() > 0.5
      }
    
      axios.post('http://localhost:3001/notes', noteObject)
        .then(response => {
          console.log(response)
        })
    }

    handleNoteChange = (e) => {
      console.log(e.target.value)
      this.setState({ new_note: e.target.value })
    }
  
    render() {
      const notesToShow =
        this.state.showAll ?
          this.state.notes :
          this.state.notes.filter(note => note.important === true)
  
      const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'
  
      return (
        <div>
          <h1>Muistiinpanot</h1>
  
          <div>
            <button onClick={this.toggleVisible}>
              näytä {label}
            </button>
          </div>
  
          <ul>
            {notesToShow.map(note => <Note key={note.id} note={note} />)}
          </ul>
          <form onSubmit={this.addNote}>
            <input
              value={this.state.new_note}
              onChange={this.handleNoteChange}
            />
            <button type="submit">tallenna</button>
          </form>
        </div>
      )
    }
  }

  export default NoteApp