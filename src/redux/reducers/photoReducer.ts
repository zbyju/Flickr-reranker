import { RawPhoto } from "../../types/photo"
import { PhotoAction } from "../../types/redux/photoTypes"

const photoReducer = (state: Array<RawPhoto> = [], action: PhotoAction): Array<RawPhoto> => {
    console.log(action)
    switch(action.type) {
        case "UPDATE_PHOTOS":
            return action.payload
        default:
            return state
    }
}

export default photoReducer