import { RawPhoto } from "../../types/photo"
import { CalculatedAction } from "../../types/redux/calculatedTypes"

const calculatedReducer = (state: boolean = true, action: CalculatedAction): boolean => {
    switch(action.type) {
        case "SET_CALCULATED":
            return action.payload
        default:
            return state
    }
}

export default calculatedReducer