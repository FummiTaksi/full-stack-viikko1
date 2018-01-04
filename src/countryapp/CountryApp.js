import React from 'react'
import InputField from '../components/input/InputField'

class CountryApp extends React.Component {

    constructor() {
        super();
        this.state = {
            filter: ""
        }
    }

    changeFilter = (e) => {
        this.setState({filter: e.event.target.value});
    }


    render() {
        return (
            <div>
                <InputField 
                    nameOfField = "find countries"
                    value = {this.state.filter}
                    onChange = {this.changeFilter}
                />
            </div>    
        )
    }

}

export default CountryApp