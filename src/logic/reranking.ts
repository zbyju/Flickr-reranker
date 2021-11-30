import moment from "moment"
import rerankFormReducer from "../redux/reducers/rerankFormReducer"
import { DateTaken, GPSLocation, RerankForm, Resolution, Title } from "../types/fields"
import { RawPhoto, ScoredPhoto } from "../types/photo"
import { PhotoScore, PhotoScores, Score } from "../types/reranking"
import { getGPSOfPhoto } from "../utils/photo"
import { dateDistanceNormalized, findMaxGpsDistance, findMaxTimeDifference, gpsDistanceNormalized, levenshteinDistanceNormalized } from "./similarity"

export const addUpScore = (score: Score): number => {
  return score.value * score.weight
}

export const addScore = (scores: PhotoScores): number => {
  return addUpScore(scores.title) + addUpScore(scores.resolution) + addUpScore(scores.gps) + addUpScore(scores.dateTaken)
}

const calculateTitleScore = (photo: RawPhoto, title: Title): number => {
  return levenshteinDistanceNormalized(photo.title.toLowerCase(), title.toLowerCase())
}

const calculateResolutionScore = (photo: RawPhoto, resolution: Resolution): number => {
  return Math.random()
}

const calculateDateTakenScore = (photo: RawPhoto, formDate: DateTaken, maxTimeDifference: number): number => {
  return dateDistanceNormalized(moment(photo.datetaken), formDate, maxTimeDifference)
}

const calculateGPSScore = (photo: RawPhoto, gps: GPSLocation, maxDistance: number): number => {
  return gpsDistanceNormalized(getGPSOfPhoto(photo), gps, maxDistance)
}

export const calculatePhotoScore = (sp: ScoredPhoto, photos: Array<RawPhoto>, rerankForm: RerankForm, prevRerankForm: RerankForm): PhotoScore => {
  const titleScore = (prevRerankForm.titleField.data === rerankForm.titleField.data ? sp.scores.scores.title.value :
                      rerankForm.titleField.data ? calculateTitleScore(sp.photo, rerankForm.titleField.data) :
                      0)
  const resolutionScore = (prevRerankForm.resolutionField.data === rerankForm.resolutionField.data ? sp.scores.scores.resolution.value :
                           rerankForm.resolutionField.data ? calculateResolutionScore(sp.photo, rerankForm.resolutionField.data) :
                           0)

  let dateTakenScore = 0
  if(prevRerankForm.dateTakenField.data === rerankForm.dateTakenField.data) dateTakenScore = sp.scores.scores.dateTaken.value
  if(rerankForm.dateTakenField.data !== null) {
    const maxTimeDifference = findMaxTimeDifference(rerankForm.dateTakenField.data, photos.map(p=>moment(p.datetaken)))
    dateTakenScore = calculateDateTakenScore(sp.photo, rerankForm.dateTakenField.data, maxTimeDifference)
  }

  let gpsScore = 0
  if(rerankForm.gpsField.data !== null) {
    if(prevRerankForm.gpsField.data?.lat === rerankForm.gpsField.data.lat &&
       prevRerankForm.gpsField.data?.lng === rerankForm.gpsField.data.lng) {
         gpsScore = sp.scores.scores.gps.value
    } else {
      const maxDistance = findMaxGpsDistance(rerankForm.gpsField.data, photos.map(p=>getGPSOfPhoto(p)))
      gpsScore = calculateGPSScore(sp.photo, rerankForm.gpsField.data, maxDistance)
    }
  }

  const scores: PhotoScores = {
    title: { value: titleScore, weight: rerankForm.titleField.weight },
    resolution: { value: resolutionScore, weight: rerankForm.resolutionField.weight },
    dateTaken: { value: dateTakenScore, weight: rerankForm.dateTakenField.weight },
    gps: { value: gpsScore, weight: rerankForm.gpsField.weight }
  }
  const sumScore = addScore(scores)
  return {
    value: sumScore,
    scores
  }
}

export const sortRerankedPhotos = (a: ScoredPhoto, b: ScoredPhoto) => {
  return b.scores.value - a.scores.value
}
