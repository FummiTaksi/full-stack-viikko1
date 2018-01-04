import React from 'react'
import axios from 'axios'
import Country from './Country'

class CountryList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    filterContainsInName = (filter,name) => {
        const filterLowCase = filter.toLowerCase();
        const nameLowCase = name.toLowerCase().substring(0, filter.length);
        return nameLowCase === filterLowCase;
    }

    getFilteredCountryList = (allCountries) => {
        return allCountries.filter((country) => {
            return this.filterContainsInName(this.props.filter, country.name);
        })
    }

    updateCountries() {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            const allCountries = response.data;
            this.setState({
                countries: this.getFilteredCountryList(allCountries)
            });
        });
    }

    makeCountryList() {
        this.updateCountries();
        return this.state.countries.map((country) => {
            return <Country country = {country} />
        })
    }

    render() {
        const countries = this.makeCountryList();
        return (
             <ul>
                 {this.makeCountryList()}
             </ul>
        )
    }

}
export default CountryList