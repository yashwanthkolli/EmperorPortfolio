import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import 'aos'

import './MapSection.Styles.scss'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [20, 32],
    iconAnchor: [10, 32]
});

L.Marker.prototype.options.icon = DefaultIcon;

class MapSection extends React.Component {
    render(){
        return (
            <div className='map-section'>
                <div  data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='heading'>LOCATION</h1>
                    <div className='underline'></div>
                </div>
                    <div className='map-container' id='mapid' data-aos="fade-up" data-aos-duration="1000">
                    <MapContainer center={[25.315417227185467, 55.44744313990741]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                            <Marker position={[25.315417227185467, 55.44744313990741]}>
                                <Popup>
                                    Open in <a href='https://maps.app.goo.gl/KzMGdqWkogRHqBqV6' target='_blanck'>Google Maps</a>
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