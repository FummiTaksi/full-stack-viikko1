import React from 'react'

class ContactInfo extends React.Component {

    render() {
        return (
            <li key = {this.props.person.name}>
                {this.props.person.name} {this.props.person.number}
            </li>
        )
    }
}

export default ContactInfo