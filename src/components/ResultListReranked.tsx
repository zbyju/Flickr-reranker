import { Heading, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { calculatePhotoScore, sortRerankedPhotos } from "../logic/reranking";
import { RootState } from "../redux/reducers";
import ResultImage from "./ResultImage";

const ResultListReranked = () => {
    const photos = useSelector((state: RootState) => state.photos)
    const rerankForm = useSelector((state: RootState) => state.rerankForm)
    const rerankPhotos = () => {
        return photos.map(photo => {
            return {
                ...photo, score: calculatePhotoScore(photo, rerankForm)
            }
        })
    }
    return (
        <>
            <VStack h="100%" w="100%" spacing="0">
                <Heading p="3" alignSelf="start">Results Reranked:</Heading>
                {console.log(rerankPhotos())}
                {rerankPhotos().sort(sortRerankedPhotos).map((photo: any, index: number) => <ResultImage key={index} photo={photo} index={index} />)}
            </VStack>
        </>
    );
}

export default ResultListReranked;
