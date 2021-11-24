import { getDefaultRerankForm } from "../../factory/formFactory"
import { RerankForm } from "../../types/fields"
import { RerankFormAction } from "../../types/redux/rerankFormTypes"

const rerankFormReducer = (state: RerankForm = getDefaultRerankForm(), action: RerankFormAction): RerankForm => {
    switch(action.type) {
        case "UPDATE_TITLE":
            return {...state, titleField: action.payload}
        case "UPDATE_RESOLUTION":
            return {...state, resolutionField: action.payload}
        case "UPDATE_DATETAKEN":
            return {...state, dateTakenField: action.payload}
        case "UPDATE_GPS":
            return {...state, gpsField: action.payload}
        default:
            return state
    }
}

export default rerankFormReducer