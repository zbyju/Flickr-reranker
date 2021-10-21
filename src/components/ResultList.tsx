import { Heading, VStack } from "@chakra-ui/react";
import ResultImage from "./ResultImage";

const ResultList = (props: any) => {
    const [photos] = props.photosState
    console.log(photos) 
    return (
        <>
            <VStack h="100%" w="100%"
                    borderRight="1px"
                    boxShadow="lg"
                    borderColor="gray.300"
                    borderRadius="0 25px 25px 0"
                    spacing={0}
                >
                <Heading p={3} alignSelf="start">Results:</Heading>
                {photos.map((photo: any, index: number) => <ResultImage key={index} photo={photo} index={index} /> )}
            </VStack>
        </>
    );
}
 
export default ResultList;