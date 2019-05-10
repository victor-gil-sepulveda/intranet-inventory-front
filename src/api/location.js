import axios from 'axios';


class LocationApi {

  static createLocation(the_location) {
        console.log("THER_LOCATION" + the_location)
        axios.post('http://localhost:80/location',
            the_location
        )
        .then(
            res => {
                console.log("RETURNS")
                console.log(res);
                console.log(res.data);
            }, //TODO: ERROR HANDLING
            error => {
                console.log("ERROR")
                console.log(error)
            }
        )
  }
}

export default LocationApi;