import { Heading, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getDefaultScoredPhoto } from "../factory/photo";
import { calculatePhotoScore, sortRerankedPhotos } from "../logic/reranking";
import { RootState } from "../redux/reducers";
import { RawPhoto, RerankedPhoto, ScoredPhoto } from "../types/photo";
import ResultRerankedImage from "./ResultRerankedImage";
import { useEffect, useRef, useState } from "react";

const ResultListReranked = () => {
    const photos = useSelector((state: RootState) => state.photos)
    const rerankForm = useSelector((state: RootState) => state.rerankForm.rerankForm)
    const previousRerankForm = useSelector((state: RootState) => state.rerankForm.previousRerankForm)

    const [scoredPhotos, setScoredPhotos] = useState<Array<ScoredPhoto>>([])
    const [rerankedPhotos, setRerankedPhotos] = useState<Array<RerankedPhoto>>([])
    const photosSynced = useRef(false)

    useEffect(() => {
        const tmpScoredPhotos = photos.map(p => getDefaultScoredPhoto(p))
        setScoredPhotos(tmpScoredPhotos.map((sp: ScoredPhoto): ScoredPhoto => {
            return {
                photo: sp.photo,
                scores: calculatePhotoScore(sp, photos, rerankForm, previousRerankForm),
            }
        }))
        photosSynced.current = true
    }, [photos])

    useEffect(() => {
        if(photosSynced.current) {
            setScoredPhotos(scoredPhotos.map((sp: ScoredPhoto): ScoredPhoto => {
                return {
                    photo: sp.photo,
                    scores: calculatePhotoScore(sp, photos, rerankForm, previousRerankForm),
                }
            }))
        }
    }, [rerankForm])

    useEffect(() => {
        setRerankedPhotos(scoredPhotos.sort(sortRerankedPhotos).map((sp: ScoredPhoto, index: number): RerankedPhoto => {
            return {
                ...sp,
                oldRank: photos.findIndex((photo: RawPhoto) => photo.id === sp.photo.id) + 1,
                newRank: index + 1
            }
        }))
    }, [scoredPhotos])

    return (
        <>
            <VStack h="100%" w="100%" spacing="0">
                <Heading p="3" alignSelf="start">Results Reranked:</Heading>
                {rerankedPhotos.map((photo: RerankedPhoto, index: number) => {
                    return <ResultRerankedImage key={index} rerankedPhoto={photo} index={index} />
                })}
            </VStack>
        </>
    );
}

export default ResultListReranked;
