import { useMap, Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';

const casesTypeColors = {
    cases: {
        hex: '#CC1034',
        multiplier: 300,
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 1200,
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000,
    },
};


 export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1
        }   
        if(a.cases < b.cases) {
            return 1;
        }
        return 0;
    });
    return sortedData
};



export const ChangeView = ( {center, zoom } ) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}


export const showDataOnMap = ( countries , casesType='cases' ) =>
countries.map((country) => (
        <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={ Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier }        // Not the conventional radius formula
        >
            <Popup>
                <div className='popup__container'>
                    <div 
                        className='popup__flag'
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }} 
                    />
                    <div className='popup__name'>{country.country}</div>
                    <div className='popup__cases'>Cases: {numeral(country.cases).format('0,0')}</div>
                    <div className='popup__recovered'>Recovered: {numeral(country.recovered).format('0,0')}</div>
                    <div className='popup__deaths'>Deaths: {numeral(country.deaths).format('0,0')}</div>
                </div>
            </Popup>

        </Circle>
    ))
