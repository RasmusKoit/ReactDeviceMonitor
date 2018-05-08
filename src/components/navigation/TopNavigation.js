/* eslint-disable spaced-comment,no-unused-vars */
import React from "react";
import {Menu, Dropdown, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../actions/auth";

const TopNavigation = ({user, logout}) => (

    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Item as={Link} to="/addhub">Add Hub</Menu.Item>
        <Menu.Menu position="right">
            <Dropdown trigger={<Icon name="options" circular size="large"/>}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    }

}

export default connect(mapStateToProps, {logout: actions.logout})(TopNavigation);