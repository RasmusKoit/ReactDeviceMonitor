import React from "react";

import SearchHubForm from "../forms/SearchHubForm";

class AddHub extends React.Component {
    state = {
        hub: null
    };


    render() {
        return (
            <Segment>
                <h1>Authenticate a new hub!</h1>
                <SearchHubForm/>
            </Segment>
        );
    }
}

export default AddHub;