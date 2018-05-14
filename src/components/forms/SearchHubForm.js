import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchHubForm extends React.Component {
    state = {
        query: "",
        loading: false,
        options: [],
        hubs: {}
    };

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({
            query: data.searchQuery
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    };

    onChange = (e, data) => {
        this.setState({ query: data.value });
        this.props.onHubSelect(this.state.hubs[data.value]);
    };

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true });
        axios
            .get(`/api/auth/hub?q=${this.state.query}`)
            .then(res => res.data.hubs)
            .then(hubs => {
                const options = [];
                const hubsHash = {};
                hubs.forEach(hub => {
                    hubsHash[hub.hubs] = hub;
                    options.push({
                        key: hub.key,
                        value: hub.key,
                        text: hub.key
                    });
                });
                this.setState({ loading: false, options, hubs: hubsHash });
            });
    };

    render() {
        return (
            <Form>
                <Dropdown
                    search
                    fluid
                    placeholder="Search Hub by key"
                    value={this.state.query}
                    onSearchChange={this.onSearchChange}
                    options={this.state.options}
                    loading={this.state.loading}
                    onChange={this.onChange}
                />
            </Form>
        );
    }
}

SearchHubForm.propTypes = {
    onHubSelect: PropTypes.func.isRequired
};

export default SearchHubForm;