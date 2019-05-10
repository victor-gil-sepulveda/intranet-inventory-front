import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function LocationReducer(state = initialState.locations, action) {
  switch(action.type) {
    case types.CREATE_LOCATION_SUCCESS:
      return action.cats
    default:
     return state;
  }
}