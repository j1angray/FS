import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthenticatedUser from './AuthenticatedUser.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticatedUser.isLoggedin()) {
            return <Route {...this.props} /> //spread operator
        } else {
            return <Redirect to="/" />
        }

    }
}

export default AuthenticatedRoute