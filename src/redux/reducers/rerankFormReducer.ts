import { getDefaultRerankForm } from "../../factory/formFactory"
import { RerankForm } from "../../types/fields"
import { RerankFormAction } from "../../types/redux/rerankFormTypes"

interface RerankFormReducerState {
    rerankForm: RerankForm
    previousRerankForm: RerankForm
}

const defaultState: RerankFormReducerState = {
    rerankForm: getDefaultRerankForm(),
    previousRerankForm: getDefaultRerankForm()
}

const rerankFormReducer = (state: RerankFormReducerState = defaultState, action: RerankFormAction): RerankFormReducerState => {
    switch(action.type) {
        case "UPDATE_TITLE":
            return { rerankForm: {...state.rerankForm, titleField: action.payload},
                     previousRerankForm: state.rerankForm }
        case "UPDATE_RESOLUTION":
            return { rerankForm: {...state.rerankForm, resolutionField: action.payload},
                     previousRerankForm: state.rerankForm }
        case "UPDATE_DATETAKEN":
            return { rerankForm: {...state.rerankForm, dateTakenField: action.payload},
                     previousRerankForm: state.rerankForm }
        case "UPDATE_GPS":
            return { rerankForm: {...state.rerankForm, gpsField: action.payload},
                     previousRerankForm: state.rerankForm }
        case "UPDATE_RERANK_FORM":
            return { rerankForm: action.payload, previousRerankForm: state.rerankForm }
        default:
            return state
    }
}

export default rerankFormReducer
