import { Box, Heading, VStack, Image } from "@chakra-ui/react";

const ResultList = (props: any) => {
    const [photos, setPhotos] = props.photosState
    console.log(photos) 
    return (
        <>
            <VStack p="3" h="100%" w="100%"
                    borderRight="1px"
                    boxShadow="lg"
                    borderColor="gray.300"
                    borderRadius="0 25px 25px 0">
                <Heading alignSelf="start">Results:</Heading>
                {photos.map((photo: any, index: number) => {
                    return (
                        <Box key={index}>
                            <Image src={photo.url_z} alt="Test" />
                        </Box>
                    )
                })}
            </VStack>
        </>
    );
}
 
export default ResultList;