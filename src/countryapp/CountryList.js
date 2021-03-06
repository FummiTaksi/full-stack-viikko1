import React from 'react'
import axios from 'axios'
import Country from './Country'

class CountryList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allCountries: [],
            selectedCountry: undefined
        }
    }

    filterContainsInName = (filter,name) => {
        const filterLowCase = filter.toLowerCase();
        const nameLowCase = name.toLowerCase().substring(0, filter.length);
        return nameLowCase === filterLowCase;
    }

    getFilteredCountryList = () => {
        return this.state.allCountries.filter((country) => {
            return this.filterContainsInName(this.props.filter, country.name);
        })
    }
    makeCountryList(countries) {
        return countries.map((country) => {
            return <li key = {country.name} onClick = {() => this.setSelectedCountry(country)} >
                        {country.name}
                    </li>
        })
    }

    componentWillMount() {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            this.setState({allCountries: response.data})
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.selectedCountry) {
            if (!nextProps.filter || !this.filterContainsInName(nextProps.filter, this.state.selectedCountry.name)) {
                this.setSelectedCountry(undefined);
            }
        }
      }



    setSelectedCountry = (country) => {
        this.setState({selectedCountry: country});
    }

    render() {
        const countries = this.getFilteredCountryList();
        if (this.state.selectedCountry) {
            return <Country country = {this.state.selectedCountry} />
        }
        if (countries.length === 1) {
            const country = countries[0];
            return (
                <Country country = {country} />
            )
        }
        if (countries.length > 10 ) {
            return (
                <p>too many matches,specify another filter</p>
            )
        }
        return (
             <ul>
                 {this.makeCountryList(countries)}
             </ul>
        )
    }

}
export default CountryList