import { TitleField, DateTakenField, GPSField, ResolutionField } from "../types/fields"

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