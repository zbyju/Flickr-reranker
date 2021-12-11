import moment from "moment"
import { mergeFetches } from "../utils/fetching"

export function fetchFlickr(query: string, page: number = 1, perPage: number = 250, hasGeo: boolean = true, sort: string = "relevance", format: string = "json"): Promise<any> {
    const config = require("../config")
    return new Promise((resolve, reject) => {
        fetch(`${config.API_BASE_URL}?method=flickr.photos.search&text=${query}&api_key=${config.API_KEY}&sort=${sort}&format=${format}&has_geo=${hasGeo}&per_page=${perPage}&page=${page}&extras=date_taken,geo,url_z`)
        .then(response => response.text())
        .then(text => {
            const data = JSON.parse(text.substring(14, text.length - 1))
            resolve(data)
        })
        .catch(err => reject(err))
    })
}

export function fetchSearch(query: string): Promise<any> {
    const numberOfFetches = 1
    const numberOfPhotos = 250
    const perPage = numberOfPhotos / numberOfFetches
    return new Promise(async (resolve, reject) => {
        try {
            const before = moment()
            const results = await Promise.all(Array.from({ length: numberOfFetches }, (v, i) => i).map(x => fetchFlickr(query, x, perPage)))
            const after = moment()
            console.log(moment.duration(after.diff(before)).asMilliseconds())
            resolve(mergeFetches(results))
        } catch(err) {
            reject(err)
        }

    })
}
