export const mergeFetches = (results: Array<any>): Array<any> => {
  console.log(results)
  return results.map(res => res?.photos?.photo || []).flat(1)
}
