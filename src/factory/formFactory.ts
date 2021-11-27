import { DateTakenField, GPSField, GPSLocation, RerankForm, ResolutionField, TitleField } from "../types/fields"

export const getDefaultTitleField = (): TitleField => {
    return { data: null, weight: 100 }
}

export const getDefaultDateTakenField = (): DateTakenField => {
    return { data: null, weight: 100 }
}

export const getDefaultResolutionField = (): ResolutionField => {
    return { data: null, weight: 100 }
}

export const getDefaultGPSField = (): GPSField => {
    return { data: null, weight: 100 }
}

export const getDefaultMapPosition = (): GPSLocation => {
    return {
        lat: 50.10507433351475,
        lng: 14.38970665800668
    }
}

export const getDefaultRerankForm = (): RerankForm => {
    return {
        titleField: getDefaultTitleField(),
        resolutionField: getDefaultResolutionField(),
        dateTakenField: getDefaultDateTakenField(),
        gpsField: getDefaultGPSField()
    }
}
