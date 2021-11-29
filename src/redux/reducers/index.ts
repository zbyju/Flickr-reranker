import {combineReducers} from 'redux'
import calculatedReducer from './calculatedReduces'
import photoReducer from './photoReducer'
import rerankFormReducer from './rerankFormReducer'
import searchFormReducer from './searchFormReducer'

const rootReducer = combineReducers({
    photos: photoReducer,
    rerankForm: rerankFormReducer,
    searchForm: searchFormReducer,
    calculated: calculatedReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

