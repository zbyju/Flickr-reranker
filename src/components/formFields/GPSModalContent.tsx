import { Box } from "@chakra-ui/react";
import { GPSLocation } from "../../types/fields";
import Map from "./Map";

interface GPSModalContentProps {
    locationState: [GPSLocation, any]
    locationChangable?: boolean
}

const GPSModalContent = ({ locationState, locationChangable }: GPSModalContentProps) => {
    return (
        <Box w="100%" h="600px" maxH="100%">
            <Map zoom={11} locationState={locationState} locationChangable={locationChangable} />
        </Box>
    );
}

export default GPSModalContent;
