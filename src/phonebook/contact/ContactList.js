import React from 'react'
import ContactInfo from './ContactInfo'

class ContactList extends React.Component {


    filterContainsInName = (filter,name) => {
        const filterLowCase = filter.toLowerCase();
        const nameLowCase = name.toLowerCase();
        return nameLowCase.includes(filterLowCase);
    }

    render() {
        const filteredPersons = this.props.persons.filter((person) => {
            return this.filterContainsInName(this.props.filter, person.name);
        })

        const persons = filteredPersons.map((person) => {
            return <ContactInfo key = {person.name} person = {person} />
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