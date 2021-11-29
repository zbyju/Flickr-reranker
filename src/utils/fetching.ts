export const mergeFetches = (results: Array<any>): Array<any> => {
  return results.map(res => res?.photos?.photo || []).flat(1)
}
