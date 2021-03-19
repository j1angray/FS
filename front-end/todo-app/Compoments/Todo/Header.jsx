import React, {Component} from 'react';
import {withRouter} from 'react-router'; // solve the refresh issue (let the header update whenever the router is called)
import {Link} from 'react-router-dom'
import AuthenticatedUser from './AuthenticatedUser.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticatedUser.isLoggedin();
        //console.log(isUserLoggedIn);
        return (
            <header>
               <nav className="navbar navbar-expand-md bg-dark">
                    <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/vante">Home</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Content</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/">Login</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticatedUser.successfulLogout}>Logout</Link></li>}
                    </ul>
               </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);