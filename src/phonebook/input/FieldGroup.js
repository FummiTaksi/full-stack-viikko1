import React from 'react'
import InputField from './InputField'

class FieldGroup extends React.Component {

    render() {
        return (
            this.props.inputObjects.map((inputObject) => {
                return (<InputField 
                            key = {inputObject.text}
                            nameOfField = {inputObject.text}
                            nameValue = {inputObject.value}
                            changeFunction = {inputObject.changeFunction}
                        />)    
            })
        )
    }
}

export default FieldGroup