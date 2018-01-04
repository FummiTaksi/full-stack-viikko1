import React from 'react'
import InputField from '../components/input/InputField'
import CountryList from './CountryList'

class CountryApp extends React.Component {

    constructor() {
        super();
        this.state = {
            filter: ""
        }
    }

    changeFilter = (e) => {
        this.setState({filter: e.target.value});
    }

    render() {
        return (
            <div>
                <InputField 
                    nameOfField = "find countries"
                    value = {this.state.filter}
                    changeFunction = {this.changeFilter}
                />
                <CountryList filter = {this.state.filter}/>
            </div>    
        )
    }

}

export default CountryApp