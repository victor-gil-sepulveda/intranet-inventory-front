
import React from "react";
import Form from "react-jsonschema-form";
import LocationSchema from "./locationSchema";
import LocationApi from "../../api/location";

const schema = {
    title: "Location",
      type: "object",
      required: ["address"],
      properties: LocationSchema
};

class CreateLocationPage extends React.Component {

    constructor(props) {
        super(props);

        this.saveLocation = this.saveLocation.bind(this);
    }

    saveLocation( { formData }, event){
        console.log(formData)
        console.log(event)
        event.preventDefault();
        LocationApi.createLocation(formData);
    }

    render() {
        return (
            <Form schema={schema}
                //onChange={log("changed")}
                onSubmit={this.saveLocation}
                //onError={log("errors")}
                />
        );
    }
};

export default CreateLocationPage;