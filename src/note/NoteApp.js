import React from 'react'
import Note from './Note'

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