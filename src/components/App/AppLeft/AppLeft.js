import React, { useState } from 'react';
import { Header } from './Header/Header';
import InfoBox from './InfoBoxes/InfoBox';
import Map from './Map/Map';
import './AppLeft.css';
import reducer from './Reducer/CountriesDataReducer';
import { useCountriesDataStateValue } from './StateProvider/CountriesDataStateProvider'
import "leaflet/dist/leaflet.css";

function AppLeft() {
    // 30.5595° S, 22.9375° E   South Africa coordinates
    
    const[countries__data__state, countries__data__dispatch] = useCountriesDataStateValue();
    const[mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });   // use lat and lng as defined in documentation
    const[mapZoom, setMapZoom] = useState(3);

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

            <Map 
            center={mapCenter}
            zoom={mapZoom}
            />
        
        </div>
    )
}

export default AppLeft
