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
