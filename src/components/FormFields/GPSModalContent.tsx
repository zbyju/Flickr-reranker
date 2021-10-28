import { Box } from "@chakra-ui/react";
import { GPSLocation } from "../../types/map";
import Map from "./Map";

interface GPSModalContentProps {
    locationState: [GPSLocation, any]
}

const GPSModalContent = ({locationState}: GPSModalContentProps) => {
    return (
        <Box w="100%" h="600px" maxH="100%">
            <Map zoom={11} locationState={locationState} />
        </Box>
    );
}
 
export default GPSModalContent;