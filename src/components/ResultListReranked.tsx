import { Heading, VStack } from "@chakra-ui/react";

interface ResultListRerankedProps {
}

const ResultListReranked = ({}: ResultListRerankedProps) => {
    return (
        <>
            <VStack p="3" h="100%" w="100%">
                <Heading alignSelf="start">Results Reranked:</Heading>
            </VStack>
        </>
    );
}
 
export default ResultListReranked;