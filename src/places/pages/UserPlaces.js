import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/P1150143_Pano4_-_Machu_Picchu.JPG/800px-P1150143_Pano4_-_Machu_Picchu.JPG',
        address: 'Location: 13° 9′ 48.57″ S, 72° 32′ 45.04″ W ',
        location: {
            lat: 13.16349,
            lang: -72.545845,
        },
        creator: 'u1'
    },

    { 
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://images.pexels.com/photos/3379633/pexels-photo-3379633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        address: 'Location: 13° 9′ 48.57″ S, 72° 32′ 45.04″ W ',
        location: {
            lat: 13.16349,
            lang: -72.545845,
        },
        creator: 'u2'

    }
]

const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator ===userId);
    return <PlaceList items={loadedPlaces} />
    return (
        <PlaceList items={DUMMY_PLACES} />
    )

};


export default UserPlaces;