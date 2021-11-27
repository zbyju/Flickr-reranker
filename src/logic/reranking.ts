import { DateTaken, GPSLocation, RerankForm, Resolution, Title } from "../types/fields"
import { RawPhoto, ScoredPhoto } from "../types/photo"
import { PhotoScore, PhotoScores, Score } from "../types/reranking"

export const addUpScore = (score: Score): number => {
  return score.value * score.weight
}

export const addScore = (scores: PhotoScores): number => {
  return addUpScore(scores.title) + addUpScore(scores.resolution) + addUpScore(scores.gps) + addUpScore(scores.dateTaken)
}

const calculateTitleScore = (photo: RawPhoto, title: Title): number => {
  return Math.random()
}

const calculateResolutionScore = (photo: RawPhoto, resolution: Resolution): number => {
  return Math.random()
}

const calculateDateTakenScore = (photo: RawPhoto, dateTaekn: DateTaken): number => {
  return Math.random()
}

const calculateGPSScore = (photo: RawPhoto, gps: GPSLocation): number => {
  return Math.random()
}

export const calculatePhotoScore = (photo: RawPhoto, rerankForm: RerankForm): PhotoScore => {
  const titleScore = rerankForm.titleField.data ? calculateTitleScore(photo, rerankForm.titleField.data) : 0
  const resolutionScore = rerankForm.resolutionField.data ? calculateResolutionScore(photo, rerankForm.resolutionField.data) : 0
  const dateTakenScore = rerankForm.dateTakenField.data ? calculateDateTakenScore(photo, rerankForm.dateTakenField.data) : 0
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
  return a.scores.value - b.scores.value
}
