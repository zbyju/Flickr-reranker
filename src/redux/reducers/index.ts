import {combineReducers} from 'redux'
import photoReducer from './photoReducer'
import rerankFormReducer from './rerankFormReducer'
import searchFormReducer from './searchFormReducer'

const rootReducer = combineReducers({
    photos: photoReducer,
    rerankForm: rerankFormReducer,
    searchForm: searchFormReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

