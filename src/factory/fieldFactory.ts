import { AuthorField, DateTakenField, GPSField, ResolutionField } from "../types/fields"

export const getDefaultAuthorForm = (): AuthorField => {
    return { data: null, weight: 100 }
}

export const getDefaultDateTakenForm = (): DateTakenField => {
    return { data: null, weight: 100 }
}

export const getDefaultResolutionForm = (): ResolutionField => {
    return { data: null, weight: 100 }
}

export const getDefaultGPSForm = (): GPSField => {
    return { data: null, weight: 100 }
}