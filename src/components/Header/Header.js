import React ,{ useState, useEffect } from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import './Header.css'

function Header() {

    const[countries, setCountries] = useState([]);
    const[country, setCountry] = useState('worldwide');

    const countryChange = (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
    }

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => (
                    {
                        name : country.country,
                        value : country.countryInfo.iso2
                    }
                ));
                setCountries(countries)
            })
        }
        getCountriesData();
    }, [])

    return (
        <div className='app__header'>
            <h1 className='app__header__title'>COVID-19 TRACKER</h1>
            
            <FormControl className='app__header__dropdown'>
                <Select variant='outlined' value={country} onChange={countryChange}>
                <MenuItem value='worldwide'>Worldwide</MenuItem>
                    {
                        countries.map(country => (
                            <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}

export default Header
