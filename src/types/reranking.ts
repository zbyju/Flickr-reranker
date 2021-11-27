export interface Score {
  value: number
  weight: number
}

export interface PhotoScores {
  title: Score
  resolution: Score
  dateTaken: Score
  gps: Score
}

export interface PhotoScore {
  value: number,
  scores: PhotoScores
}
