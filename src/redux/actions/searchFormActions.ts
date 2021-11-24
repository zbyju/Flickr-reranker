import { UpdateSearchAction } from "../../types/redux/searchFormTypes"

export const updateSearch = (searchTerm: string): UpdateSearchAction => {
    return {
        type: "UPDATE_SEARCH",
        payload: searchTerm
    }
}