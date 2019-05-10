import LocationApi from '../api/location';
import * as types from '../actions/actionTypes';

export function createLocationSuccess(location) {
  return {type: types.CREATE_LOCATION_SUCCESS, location}
}

export function createLocation() {
  return function(dispatch) {
    return LocationApi.createLocation().then(function(loc){
      dispatch(createLocationSuccess(loc));
    })
    .catch(error => {
      throw(error);
    });
  };
}