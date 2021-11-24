import { Heading, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { RawPhoto } from "../types/photo";
import ResultImage from "./ResultImage";

interface ResultListProps {
}

const ResultList = ({}: ResultListProps) => {
    const photos = useSelector((state: RootState) => state.photos)
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
                {photos.map((photo: RawPhoto, index: number) => <ResultImage key={index} photo={photo} index={index} /> )}
            </VStack>
        </>
    );
}
 
export default ResultList;