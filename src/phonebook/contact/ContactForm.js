import React from 'react'
import FieldGroup from '../input/FieldGroup'

class ContactForm extends React.Component {

    render() {
        return (
          <div>
            <form onSubmit={this.props.formObject.submitFunction}>
                <FieldGroup inputObjects = {this.props.formObject.inputObjects} />
                <button type="submit">lisää</button>
            </form>
           </div> 
        )

    }
}

export default ContactForm