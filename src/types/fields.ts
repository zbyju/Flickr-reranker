export interface RerankForm {
    authorField: AuthorField
    resolutionField: ResolutionField
    dateTakenField: DateTakenField
    gpsField: GPSField
}

export interface FormField<T> {
    data: T | null;
    weight: number
}

export type Resolution = {
    width: number
    height: number
}
export type Author = string
export type DateTaken = Date
export type GPS = {
    latitude: number
    longitude: number
}

export interface ResolutionField extends FormField<Resolution> {
    data: Resolution | null
}
export interface AuthorField extends FormField<Author> {
    data: Author | null
}
export interface DateTakenField extends FormField<DateTaken> {
    data: DateTaken | null
}
export interface GPSField extends FormField<GPS> {
    data: GPS | null
}