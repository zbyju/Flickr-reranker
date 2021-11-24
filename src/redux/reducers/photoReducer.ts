import { RawPhoto } from "../../types/photo"
import { PhotoAction } from "../../types/redux/photoTypes"

const photoReducer = (state: Array<RawPhoto> = [], action: PhotoAction): Array<RawPhoto> => {
    switch(action.type) {
        case "UPDATE_PHOTOS":
            return action.payload
        default:
            console.error("Unknown action type")
            return state
    }
}

export default photoReducer