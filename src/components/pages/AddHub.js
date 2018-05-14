import React from "react";
import { Segment } from "semantic-ui-react";
import SearchHubForm from "../forms/SearchHubForm";
import HubForm from "../forms/HubForm";

class AddHub extends React.Component {
    state = {
        hub: null
    };

    onHubSelect = hub => this.setState({ hub });

    addHub = () => console.log("hi");

    render() {
        return (
            <Segment>
                <h1>Add a new Hub</h1>
                <SearchHubForm onHubSelect={this.onHubSelect} />


                {this.state.hub && (
                    <HubForm submit={this.addHub} hub={this.state.hub} />
                )}

            </Segment>
        );
    }
}

export default AddHub;
