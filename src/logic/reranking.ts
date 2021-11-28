import moment from "moment"
import { DateTaken, GPSLocation, RerankForm, Resolution, Title } from "../types/fields"
import { RawPhoto, ScoredPhoto } from "../types/photo"
import { PhotoScore, PhotoScores, Score } from "../types/reranking"
import { dateDistanceNormalized, findMaxTimeDifference, levenshteinDistanceNormalized } from "./similarity"

export const addUpScore = (score: Score): number => {
  return score.value * score.weight
}

export const addScore = (scores: PhotoScores): number => {
  // console.log(scores)
  return addUpScore(scores.title) + addUpScore(scores.resolution) + addUpScore(scores.gps) + addUpScore(scores.dateTaken)
}

const calculateTitleScore = (photo: RawPhoto, title: Title): number => {
  return levenshteinDistanceNormalized(photo.title, title)
}

const calculateResolutionScore = (photo: RawPhoto, resolution: Resolution): number => {
  return Math.random()
}

const calculateDateTakenScore = (photo: RawPhoto, formDate: DateTaken, maxTimeDifference: number): number => {
  return dateDistanceNormalized(moment(photo.datetaken), formDate, maxTimeDifference)
}

const calculateGPSScore = (photo: RawPhoto, gps: GPSLocation): number => {
  return Math.random()
}

export const calculatePhotoScore = (photo: RawPhoto, photos: Array<RawPhoto>, rerankForm: RerankForm): PhotoScore => {
  const titleScore = rerankForm.titleField.data ? calculateTitleScore(photo, rerankForm.titleField.data) : 0
  const resolutionScore = rerankForm.resolutionField.data ? calculateResolutionScore(photo, rerankForm.resolutionField.data) : 0

  let dateTakenScore = 0
  if(rerankForm.dateTakenField.data !== null) {
    const maxTimeDifference = findMaxTimeDifference(rerankForm.dateTakenField.data, photos.map(p=>moment(p.datetaken)))
    dateTakenScore = calculateDateTakenScore(photo, rerankForm.dateTakenField.data, maxTimeDifference)
  }

  const gpsScore = rerankForm.gpsField.data ? calculateGPSScore(photo, rerankForm.gpsField.data) : 0

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
