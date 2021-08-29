import axios from 'axios';
import { useState, useEffect } from 'react'
import { config } from '../config';

export const UseGoogleAddress = (address, state, city, country) => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${state}${country}&key=${config.clientIdMaps}`;
    useEffect(async() => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location)
    },[]);
    return map;
}
