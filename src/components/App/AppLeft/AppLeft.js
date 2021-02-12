import React from 'react';
import { Header } from './Header/Header';
import InfoBox from './InfoBoxes/InfoBox';
import Map from './Map/Map';
import './AppLeft.css';
import reducer from './Reducer/CountriesDataReducer';
import { useCountriesDataStateValue } from './StateProvider/CountriesDataStateProvider'

function AppLeft() {
    
    const[countries__data__state, countries__data__dispatch] = useCountriesDataStateValue();

    return (
        <div className='app__left'>
            <Header/>

            <div className='app__left_infoBox'>
                <InfoBox 
                title='Coronavirus cases' 
                cases={countries__data__state.todayCases} 
                total={countries__data__state.cases}
                />

                <InfoBox 
                title='Recovered' 
                cases={countries__data__state.todayRecovered} 
                total={countries__data__state.recovered}
                />

                <InfoBox title='Deaths' 
                cases={countries__data__state.todayDeaths} 
                total={countries__data__state.deaths}
                />
            </div>

            <Map />
        
        </div>
    )
}

export default AppLeft
