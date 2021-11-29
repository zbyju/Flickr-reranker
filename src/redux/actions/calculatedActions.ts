import { SetCalculatedAction } from "../../types/redux/calculatedTypes"

export const setCalculated = (calculated: boolean): SetCalculatedAction => {
    return {
        type: "SET_CALCULATED",
        payload: calculated
    }
}