import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment} from "semantic-ui-react";
import InlineError from "../messages/InLineError";

class HubForm extends React.Component {
    state = {
        data: {
            key: this.props.hub
        },
        loading: false,
        errors: {}
    };

    componentWillReceiveProps(props) {
        this.setState({
            data: {
                key: props.hub
            }
        });
    }

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    // Validate that key is uid4
    validate = data => {
        const errors = {};
        if (!data.key) errors.key = "Can't be blank";
        return errors;
    };

    render() {
        const { errors, data, loading } = this.state;

        return (
            <Segment>
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <Grid columns={1} fluid stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Form.Field error={!!errors.key}>
                                    <label htmlFor="title">Hub key</label>
                                    <input
                                        type="text"
                                        id="key"
                                        name="key"
                                        placeholder="Hub Key"
                                        value={data.hub}
                                        onChange={this.onChange}
                                    />
                                    {errors.key && <InlineError text={errors.key} />}
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Button primary>Save</Button>
                        </Grid.Row>
                    </Grid>
                </Form>
            </Segment>
        );
    }
}

HubForm.propTypes = {
    submit: PropTypes.func.isRequired,
    hub: PropTypes.shape({
        key: PropTypes.string.isRequired
    }).isRequired
};

export default HubForm;