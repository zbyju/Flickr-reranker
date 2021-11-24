import { RawPhoto } from "../photo"

export type UpdatePhotosAction = {
    type: "UPDATE_PHOTOS",
    payload: Array<RawPhoto>
}

export type PhotoAction = UpdatePhotosAction