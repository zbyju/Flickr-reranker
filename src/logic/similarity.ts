import moment from "moment";

// Code used from https://www.tutorialspoint.com/levenshtein-distance-in-javascript
const levenshteinDistance = (str1: string, str2: string): number => {
  const track = Array(str2.length + 1).fill(null).map(() =>
  Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
        );
      }
  }
  return track[str2.length][str1.length];
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
