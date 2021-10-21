import { Heading, VStack } from "@chakra-ui/react";

const ResultList = () => {
    return (
        <>
            <VStack p="3" h="100%" w="100%"
                    borderRight="1px"
                    boxShadow="lg"
                    borderColor="gray.300">
                <Heading alignSelf="start">Results:</Heading>
            </VStack>
        </>
    );
}
 
export default ResultList;