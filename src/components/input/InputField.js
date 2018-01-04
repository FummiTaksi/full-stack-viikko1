import React from 'react'

class InputField extends React.Component {

    render() {
        return (
            <div>
                {this.props.nameOfField}
                <input
                    value={this.props.nameValue}
                    onChange={this.props.changeFunction}
                />
            </div>
        )

    }
}

export default InputField