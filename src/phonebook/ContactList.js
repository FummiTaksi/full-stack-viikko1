import React from 'react'

class ContactList extends React.Component {

    render() {
        const persons = this.props.persons.map((person) => {
            return <li key = {person.name}>{person.name}</li>;
        })

        return (
            <div>
                <h2>Numerot</h2>
                    <ul>
                        {persons}
                    </ul>    
            </div>
        )
    }
}

export default ContactList