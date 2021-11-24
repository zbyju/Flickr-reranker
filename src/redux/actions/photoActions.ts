import { RawPhoto } from "../../types/photo"
import { UpdatePhotosAction } from "../../types/redux/photoTypes"

export const updatePhotos = (photos: Array<RawPhoto>): UpdatePhotosAction => {
    return {
        type: "UPDATE_PHOTOS",
        payload: photos
    }
}