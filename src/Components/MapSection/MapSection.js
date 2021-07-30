import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import './MapSection.Styles.scss'

class MapSection extends React.Component {
    render(){
        return (
            <div className='map-section'>
                <h1 className='heading'>LOCATION</h1>
                <div className='underline'></div>
                <div className='map-container' id='mapid'>
                    <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='scroll scroll-dark scroll-buttom-left'>Visit Us</div>
            </div>
        )
    }
}

export default MapSection