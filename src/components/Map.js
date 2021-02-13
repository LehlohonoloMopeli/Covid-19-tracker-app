import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { ChangeView } from './util'
import './Map.css';

function Map({ countries, center, zoom }) {
    return (
        <div className='app__map'>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer 
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"      // From documentation
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}

export default Map
