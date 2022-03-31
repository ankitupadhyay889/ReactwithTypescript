import React from 'react';
import GoogleMapReact from "google-map-react"
import Locat from './Locat';

type Imap = {
    location: any;
    zoomLevel: any
}

const Googintegrat = ({},props: Imap) => {

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }

    return(
        <div className="map">
          <h2 className="map-h2">Come Visit Us At Our Campus</h2>
      
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyANPEhfIAA2LIai0w2eNFMzOObkKEB1uic' }}
              defaultCenter={props.location}
              defaultZoom={props.zoomLevel}
            >
                <Locat          
                lat={location.lat}
          lng={location.lng}
          text={location.address}/>
            </GoogleMapReact>
          </div>
        </div>
    )
}
export default Googintegrat;