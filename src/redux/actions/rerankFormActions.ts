import { DateTakenField, GPSField, RerankForm, ResolutionField, TitleField } from "../../types/fields"
import { UpdateDateTakenAction, UpdateGPSAction, UpdateRerankFormAction, UpdateResolutionAction, UpdateTitleAction } from "../../types/redux/rerankFormTypes"

export const updateTitle = (titleField: TitleField): UpdateTitleAction => {
    return {
        type: "UPDATE_TITLE",
        payload: titleField
    }
}

export const updateResolution = (resolutionField: ResolutionField): UpdateResolutionAction => {
    return {
        type: "UPDATE_RESOLUTION",
        payload: resolutionField
    }
}

export const updateDateTaken = (dateTakenField: DateTakenField): UpdateDateTakenAction => {
    return {
        type: "UPDATE_DATETAKEN",
        payload: dateTakenField
    }
}

export const updateGPS = (gpsField: GPSField): UpdateGPSAction => {
    return {
        type: "UPDATE_GPS",
        payload: gpsField
    }
}

export const updateRerankForm = (rerankForm: RerankForm): UpdateRerankFormAction => {
    return {
        type: "UPDATE_RERANK_FORM",
        payload: rerankForm
    }
}
