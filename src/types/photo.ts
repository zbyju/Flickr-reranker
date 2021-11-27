import { RerankForm } from "./fields";
import { PhotoScore } from "./reranking";

export interface RerankMeta {
    oldRank: number
    newRank: number
    rerankForm: RerankForm
}

export interface ScoredPhoto {
    photo: RawPhoto
    scores: PhotoScore
}

export interface RerankedPhoto extends ScoredPhoto {
    oldRank: number
    newRank: number
}

export interface RawPhoto {
    accuracy: string
    context: number
    datetaken: string
    datetakengranularity: number
    datetakenunknown: string
    farm: number
    geo_is_contact: number
    geo_is_family: number
    geo_is_friend: number
    geo_is_public: number
    height_z: number
    id: string
    isfamily: boolean
    isfriend: boolean
    ispublic: boolean
    latitude: string
    longitude: string
    machine_tags: string
    owner: string
    place_id: string
    secret: string
    server: string
    title: string
    url_z: string
    width_z: number
    woeid: string
}
