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
    return new Promise(async (resolve, reject) => {
        try {
            const results = await Promise.all([
                fetchFlickr(query, 1, 100), fetchFlickr(query, 2, 100),fetchFlickr(query, 3, 100), fetchFlickr(query, 4, 100),
                fetchFlickr(query, 5, 100), fetchFlickr(query, 6, 100),fetchFlickr(query, 7, 100), fetchFlickr(query, 8, 100),
            ])
            resolve(mergeFetches(results))
        } catch(err) {
            reject(err)
        }

    })
}
