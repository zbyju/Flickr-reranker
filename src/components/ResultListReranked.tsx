import { Heading, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { calculatePhotoScore, sortRerankedPhotos } from "../logic/reranking";
import { RootState } from "../redux/reducers";
import { RawPhoto, RerankedPhoto, ScoredPhoto } from "../types/photo";
import ResultRerankedImage from "./ResultRerankedImage";

const ResultListReranked = () => {
    const photos = useSelector((state: RootState) => state.photos)
    const rerankForm = useSelector((state: RootState) => state.rerankForm)
    const rerankPhotos = (): Array<RerankedPhoto> => {
        return photos.map((photo: RawPhoto): ScoredPhoto => {
            return {
                photo, scores: calculatePhotoScore(photo, photos, rerankForm)
            }
        }).sort(sortRerankedPhotos).map((scoredPhoto: ScoredPhoto, index: number): RerankedPhoto => {
            return {
                ...scoredPhoto,
                oldRank: photos.findIndex((photo: RawPhoto) => photo.id === scoredPhoto.photo.id) + 1,
                newRank: index + 1
            }
        })
    }
    return (
        <>
            <VStack h="100%" w="100%" spacing="0">
                <Heading p="3" alignSelf="start">Results Reranked:</Heading>
                {rerankPhotos().map((photo: RerankedPhoto, index: number) => {
                    return <ResultRerankedImage key={index} rerankedPhoto={photo} index={index} />
                })}
            </VStack>
        </>
    );
}

export default ResultListReranked;
