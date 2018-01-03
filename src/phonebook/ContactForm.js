import React from 'react'

class ContactForm extends React.Component {

    render() {
        return (
          <div>
            <form onSubmit={this.props.addFunction}>
                <div>
                    nimi:
                    <input
                        value={this.props.nameValue}
                        onChange={this.props.changeFunction}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
           </div> 
        )

    }
}

export default ContactForm