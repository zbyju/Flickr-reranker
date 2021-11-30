import moment from "moment";
import { GPSLocation, Resolution } from "../types/fields";

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

const getRadians = (coordinate: number) => {
  return (coordinate * Math.PI) / 180;
};

// Code used from https://github.com/lunaticmonk/great-circle-distance/blob/master/greatCircleDistance.js
export const greatCircleDistance = (gps1: GPSLocation, gps2: GPSLocation): number => {
  const { lat: lat1, lng: lng1 } = gps1;
  const { lat: lat2, lng: lng2 } = gps2;
  const φ1 = getRadians(lat1);
  const φ2 = getRadians(lat2);
  const Δφ = getRadians(lat2 - lat1);
  const Δλ = getRadians(lng2 - lng1);
  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = 6371e3 * c;
  return d / 1000;
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

export const findMaxResolution = (formRes: Resolution, resolutions: Array<Resolution | null | undefined>): [number, number] => {
  let maxX = 0
  let maxY = 0
  resolutions.forEach(res => {
    if(res === null || res === undefined) return
    const diffX = Math.abs(res.width - formRes.width)
    if(diffX > maxX) maxX = diffX
    const diffY = Math.abs(res.height - formRes.height)
    if(diffY > maxY) maxY = diffY
  })
  return [maxX, maxY]
}

export const findMaxGpsDistance = (formGps: GPSLocation, gpses: Array<GPSLocation | null | undefined>): number => {
  let maxDistance = 1
  gpses.forEach(gps => {
    if(gps === null || gps === undefined) return
    const distance = gpsDistance(gps, formGps)
    if(distance > maxDistance) maxDistance = distance
  })
  return maxDistance
}

export const dateDistance = (time: moment.Moment, formTime: moment.Moment): number => {
  return calculateTimeDifference(time, formTime)
}

export const dateDistanceNormalized = (time: moment.Moment, formTime: moment.Moment, maxTimeDifference: number): number => {
  const distance = dateDistance(time, formTime)
  return 1 - (distance / maxTimeDifference)
}

export const gpsDistance = (gps: GPSLocation, formGps: GPSLocation): number => {
  return greatCircleDistance(gps, formGps)
}

export const gpsDistanceNormalized = (gps: GPSLocation, formGps: GPSLocation, maxDistance: number): number => {
  const distance = gpsDistance(gps, formGps)
  return 1 - (distance / maxDistance)
}
