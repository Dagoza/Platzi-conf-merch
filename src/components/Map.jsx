import React, { useCallback, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { config } from '../config'

export const Map = ({location}) => {
    const mapStyles={
        height:"50vh",
        with:"100%",    
    };
    const defaultCenter= {
        lat: location.lat,
        lng: location.lng
    };

    return(
        <LoadScript googleMapsApiKey={config.clientIdMaps}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                mapStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter}></Marker>
            </GoogleMap>
        </LoadScript>
    )
}