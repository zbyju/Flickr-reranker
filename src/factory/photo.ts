import { RawPhoto, ScoredPhoto } from "../types/photo";
import { PhotoScore } from "../types/reranking";

export const getDefaultPhotoScore = (): PhotoScore => {
    return {
        value: 0,
        scores: {
            title: { value: 0, weight: 100 },
            resolution: { value: 0, weight: 100 },
            dateTaken: { value: 0, weight: 100 },
            gps: { value: 0, weight: 100 },
        }
    }
} 

export const getDefaultScoredPhoto = (photo: RawPhoto): ScoredPhoto => {
    return {
        photo,
        scores: getDefaultPhotoScore()
    }
}