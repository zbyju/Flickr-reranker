import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { RawPhoto } from "../types/photo";
import ImageDesc from "./ImageDesc";

interface ResultImageProps {
    photo: RawPhoto,
    index: number
}

const ResultImage = ({ photo, index }: ResultImageProps) => {
    return (
        <HStack
            bg="grey.100"
            borderY="1px"
            boxShadow="lg"
            borderColor="gray.400"
            style={{ borderCollapse: "collapse" }}
            justifyContent="space-between"
            spacing={0}
            w="100%"
            h="350px"
        >
            <VStack w="190px" minW="200px" h="100%" justify="flex-start" spacing={0}
                borderRight="1px" borderColor="gray.400"
                bg="blue.50">

                <ImageDesc title="Rank" label={(index + 1).toString()} />
                <ImageDesc title="Name" label={photo.title} />
                <ImageDesc title="Resolution" label={`${photo.width_z}x${photo.height_z}`} />
                <ImageDesc title="Geo" label={`${photo.latitude}x${photo.longitude}`} />
                <ImageDesc title="Date" label={`${photo.datetaken}`} />

            </VStack>

            <Box flexGrow={1} h="100%">
                <Image h="100%" mx="auto" src={photo.url_z} alt={photo.title} objectFit="contain" />
            </Box>
        </HStack>
    );
}

export default ResultImage;
