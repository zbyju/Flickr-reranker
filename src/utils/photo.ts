import { getDefaultScoredPhoto } from "../factory/photo";
import { calculatePhotoScore, sortRerankedPhotos } from "../logic/reranking";
import { GPSLocation, RerankForm } from "../types/fields";
import { RawPhoto, RerankedPhoto, ScoredPhoto } from "../types/photo";

export const photosToScoredPhotos = (photos: Array<RawPhoto>): Array<ScoredPhoto> => {
    return photos.map(p => getDefaultScoredPhoto(p))
}

export const calculateScorePhotos = (
        scoredPhotos: Array<ScoredPhoto>,
        photos: Array<RawPhoto>,
        rerankForm: RerankForm,
        previousRerankForm: RerankForm
    ): Array<ScoredPhoto> => {
        return scoredPhotos.map((sp: ScoredPhoto): ScoredPhoto => {
            return {
                photo: sp.photo,
                scores: calculatePhotoScore(sp, photos, rerankForm, previousRerankForm),
            }
        })
}

export const scoredPhotosToRankedPhotos = (scoredPhotos: Array<ScoredPhoto>, photos: Array<RawPhoto>): Array<RerankedPhoto> => {
    return scoredPhotos.sort(sortRerankedPhotos).map((sp: ScoredPhoto, index: number): RerankedPhoto => {
        return {
            ...sp,
            oldRank: photos.findIndex((photo: RawPhoto) => photo.id === sp.photo.id) + 1,
            newRank: index + 1
        }
    })
}

export const getGPSOfPhoto = (photo: RawPhoto): GPSLocation => {
    return {
        lat: parseFloat(photo.latitude),
        lng: parseFloat(photo.longitude)
    }
}