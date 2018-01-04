import React from 'react'

class ContactInfo extends React.Component {

    render() {
       
        return (
          <div>
            <li key = {this.props.person.name}>
                {this.props.person.name} {this.props.person.number} 
                <button onClick = {() => this.props.onClick(this.props.person.id)}>Poista</button>
            </li>
           
          </div>
        )
    }
}

export default ContactInfo