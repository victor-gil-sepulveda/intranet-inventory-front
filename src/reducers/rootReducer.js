import {combineReducers} from 'redux';
import locations from './locationReducer'; // gets the default and only function and renames it to 'locations'

const rootReducer = combineReducers({
  locations
})

export default rootReducer;