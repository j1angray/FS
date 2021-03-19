import React, {Component} from 'react';
//import {withRouter} from 'react-router';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import AuthenticatedUser from './AuthenticatedUser.js'
import AuthenticatedRoute from './AuthenticatedRoute.js'
import LoginComponent from './LoginComponent'
import todoListComponent from './todoListComponent'
import HeaderComponent from './Header'
import HelloworldService from './HelloworldService.js'
import todoComponent from './todoComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                
                <h1>Gòng Héi Fāt Cǒi.</h1>
                <Router>   
                    <HeaderComponent/>         
                    <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <AuthenticatedRoute path="/welcome/:n" component={WelcomeComponent} />
                    <AuthenticatedRoute path="/todos/:id" component={todoComponent} />
                    <AuthenticatedRoute path="/todos" exact component={todoListComponent} />
                    <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                    <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                <FooterComponent/>
            </div>
        )
    }
}


class FooterComponent extends Component {
    constructor(props){
        super(props);        
        this.state = {date: new Date()};
    }

    render() {
        return (
            <footer className="footer">
                <span>
                {this.state.date.toUTCString()}
                </span>
            </footer>
        )
    }
}

class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {welcomeMessage: ''}
        this.showWelcomeMessage = this.showWelcomeMessage.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
    }

    render() {
        return (
            <>
            <div>
                <h2> Welcome {this.props.match.params.n}! </h2>
                <h3> Manage your <Link to="/todos">to-do</Link> list! </h3> 
            </div>
            <div>
                Click for forward message.
                <button className="btn" onClick={this.showWelcomeMessage}>Get message</button>
            </div>
            <div>
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }
    showWelcomeMessage(){
        //console.log("welcome message");
        //HelloworldService.execute().then(response => this.setState({welcomeMessage: response.data}));
        HelloworldService.executeHelloworld(this.props.match.params.n)
        .then(response => this.setState({welcomeMessage: response.data}))
        .catch(error => this.handleErrorResponse(error));
    }

    handleErrorResponse(error) {
        console.log(error.response);
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message;

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message;
        }
        this.setState({welcomeMessage: errorMessage});
    }

}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out. Thank you and goodbye!</h1>
            </div>
        )
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div>
                Error!
            </div>
        )
    }
}


export default TodoApp;
//export default withRouter(HeaderComponent);