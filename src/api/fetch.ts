export default function fetchSearch(query: string): Promise<any> {
    const config = require("../config")
    return new Promise((resolve, reject) => {
        fetch(`${config.API_BASE_URL}?method=flickr.photos.search&text=${query}&api_key=${config.API_KEY}&format=json&has_geo=true&per_page=500&extras=date_taken,geo,url_z,machine_tags`)
        .then(response => response.text())
        .then(text => {
            const data = JSON.parse(text.substring(14, text.length - 1))
            resolve(data)
        })
        .catch(err => reject(err))
    })
}