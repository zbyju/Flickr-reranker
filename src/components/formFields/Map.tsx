import { TriangleDownIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { useMemo } from 'react';
import { GPSLocation } from '../../types/fields';

interface MapProps {
    zoom: number,
    locationState: [GPSLocation, any]
    locationChangable?: boolean
}

const Map = ({ zoom, locationState, locationChangable }: MapProps) => {
    const config = require("../../config.json")
    const [location, setLocation] = locationState
    const center = useMemo(() => location, [])

    const mapClicked = (e: any) => {
        if(locationChangable === false) return
        const loc = {
            lat: e.lat,
            lng: e.lng
        }
        setLocation(loc)
    }
    const Marker = ({ lat, lng }: any) => <TriangleDownIcon color="red" ml="-20px" mt="-40px" boxSize="10" />;

    return (
        <>
            <GoogleMapReact
                bootstrapURLKeys={{ key: config.MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={mapClicked}
            >
                <Marker lat={location.lat} lng={location.lng} />
            </GoogleMapReact>
            <Text>Location: {location.lat}, {location.lng}</Text>
        </>
    );
}

export default Map;
