import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { ChangeView, showDataOnMap } from './util'
import './Map.css';

function Map({ countries, center, zoom, casesType='cases' }) {
    return (
        <div className='app__map'>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
                <ChangeView center={center} zoom={zoom} />
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
