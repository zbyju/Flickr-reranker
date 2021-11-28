import moment from "moment"

const levenshteinDistance = (s1: string, s2: string): number => {
  if(s1.length === 0) return s2.length
  if(s2.length === 0) return s1.length
  if(s1[0] === s2[0]) return levenshteinDistance(s1.substring(1), s2.substring(1))
  return 1 + Math.min(
      levenshteinDistance(s1.substring(1), s2),
      levenshteinDistance(s1, s2.substring(1)),
      levenshteinDistance(s1.substring(1), s2.substring(1))
    )
}

export const levenshteinDistanceNormalized = (s1: string, s2: string): number => {
  const distance = levenshteinDistance(s1, s2)
  const maxLen = Math.max(s1.length, s2.length)
  return (maxLen - distance) / maxLen
}

export const calculateTimeDifference = (t1: moment.Moment, t2: moment.Moment): number => {
  return Math.abs(t1.unix() - t2.unix())
}

export const findMaxTimeDifference = (formTime: moment.Moment, times: Array<moment.Moment | null>): number => {
  let maxTime = 1
  times.forEach(time => {
    if(time === null) return
    const diff = calculateTimeDifference(time, formTime)
    if(diff > maxTime) maxTime = diff
  })
  return maxTime
}

export const dateDistance = (time: moment.Moment, formTime: moment.Moment): number => {
  return calculateTimeDifference(time, formTime)
}

export const dateDistanceNormalized = (time: moment.Moment, formTime: moment.Moment, maxTimeDifference: number): number => {
  const distance = calculateTimeDifference(time, formTime)
  return 1 - (distance / maxTimeDifference)
}
