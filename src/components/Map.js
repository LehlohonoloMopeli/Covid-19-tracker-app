import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import { ChangeView, showDataOnMap } from './util'
import './Map.css';

function Map({ countries, center, zoom, casesType }) {
    return (
        <div className='app__map'>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
                <ChangeView center={center} zoom={zoom} casesType={casesType} />
                <TileLayer 
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"      // From documentation
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap( countries, casesType )}
            </MapContainer>
        </div>
    )
}

export default Map
