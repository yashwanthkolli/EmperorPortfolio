import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'aos'

import './MapSection.Styles.scss'

class MapSection extends React.Component {
    render(){
        return (
            <div className='map-section'>
                <div  data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='heading'>LOCATION</h1>
                    <div className='underline'></div>
                </div>
                    <div className='map-container' id='mapid' data-aos="fade-up" data-aos-duration="1000">
                    <MapContainer center={[25.3153, 55.4474]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[25.3153, 55.4474]}>
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