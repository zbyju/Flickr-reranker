import { DateTakenField, GPSField, RerankForm, ResolutionField, TitleField } from "../fields"

export type UpdateTitleAction = {
    type: "UPDATE_TITLE",
    payload: TitleField
}
export type UpdateResolutionAction = {
    type: "UPDATE_RESOLUTION",
    payload: ResolutionField
}
export type UpdateDateTakenAction = {
    type: "UPDATE_DATETAKEN",
    payload: DateTakenField
}
export type UpdateGPSAction = {
    type: "UPDATE_GPS",
    payload: GPSField
}

export type UpdateRerankFormAction = {
    type: "UPDATE_RERANK_FORM",
    payload: RerankForm
}

export type RerankFormAction = UpdateTitleAction | UpdateResolutionAction | UpdateDateTakenAction | UpdateGPSAction | UpdateRerankFormAction
