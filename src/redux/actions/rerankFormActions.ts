import { DateTakenField, GPSField, ResolutionField, TitleField } from "../../types/fields"
import { UpdateDateTakenAction, UpdateGPSAction, UpdateResolutionAction, UpdateTitleAction } from "../../types/redux/rerankFormTypes"

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