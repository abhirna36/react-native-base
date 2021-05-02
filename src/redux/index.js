import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
//insert another reducers here to be combined

const reducers = combineReducers({
    homeReducer
})

export default reducers