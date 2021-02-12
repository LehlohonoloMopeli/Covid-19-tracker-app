import React ,{ useState, useEffect } from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import './Header.css'
import { useCountriesDataStateValue } from '../StateProvider/CountriesDataStateProvider'
import { useTableDataStateValue } from '../StateProvider/TableDataStateProvider'
import sortData from './util'

function Header() {

    const[countries, setCountries] = useState([]);
    const[country, setCountry] = useState('worldwide');     // Stores the country code selected only
    const[countryInfo, setCountryInfo] = useState({})       // Store the data we pull here
    const[countries__data__state, countries__data__dispatch] = useCountriesDataStateValue();
    const[table__data__state, table__data__dispatch] = useTableDataStateValue([]);

    const countryChange = (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);

        const url = 
            countryCode === 'worldwide' 
                ? "https://disease.sh/v3/covid-19/all" 
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode);        // Change it since we made a new request (meaning country code changed)
                setCountryInfo(data);
                countries__data__dispatch({
                    type: 'CHANGE_OPTION',
                    add: data
                })
        })
    }

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then((response => response.json()))
        .then((data) => {
            setCountryInfo(data);
            countries__data__dispatch({
                type: 'CHANGE_OPTION',
                add: data
            })
        })
    }, []);

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
                const sortedData = sortData(data);
                setCountries(countries);
                table__data__dispatch({
                    type: 'TABLE_DATA',
                    add: sortedData
                })
            })
        }
        getCountriesData();
    }, [])

    console.log("Test: ", countries)
    console.log("Test-2: ", table__data__state)

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
};

export {Header};