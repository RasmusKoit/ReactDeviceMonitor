import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import AddHub from './components/pages/AddHub';


const App = ({location, isAuthenticated}) => (
    <div className="ui container">
        {isAuthenticated && <TopNavigation/>}
        <Route location={location} path="/" exact component={Home} />
        <GuestRoute location={location} path="/login" exact component={Login} />
        <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
        <UserRoute location={location} path="/addhub" exact component={AddHub} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired

};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    }

}

export default connect(mapStateToProps)(App);
