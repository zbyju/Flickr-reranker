import { SearchFormAction } from "../../types/redux/searchFormTypes"

const searchFormReducer = (state: string = "", action: SearchFormAction): string => {
    switch(action.type) {
        case "UPDATE_SEARCH":
            return action.payload
        default:
            return state
    }
}

export default searchFormReducer