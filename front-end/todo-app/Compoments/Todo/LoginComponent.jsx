import React, { Component } from 'react';
import AuthenticatedUser from './AuthenticatedUser.js'

class LoginComponent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            username: "", 
            password: "",
            hasLoginFailed: false,
            showLoginMessage: false
        };
            
        this.ChangeValue = this.ChangeValue.bind(this);
        this.CheckLogin = this.CheckLogin.bind(this);
    }

    render() {
        return (
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.ChangeValue}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.ChangeValue}/>
                    <button className="btn-login" onClick={this.CheckLogin}>Login</button>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                </div>
        )
    }

    ChangeValue(event){ 
        //console.log(this.state);
        // To use a variable, put it within its square bracket: [event.target.name]
        this.setState({[event.target.name]: event.target.value});
    }

    CheckLogin(){
        /* Hardcoded Authentication /
        if(this.state.username === "vante" && this.state.password ==="1230"){
            AuthenticatedUser.successfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`); //https://github.com/ReactTraining/react-history
            //this.setState({showLoginMessage: true});
            //console.log("seccessful login");
        }
        else{
            this.setState({hasLoginFailed: true});
        }
        */

        /* Basic Authentication /
        AuthenticatedUser.executeBasicAuthBean(this.state.username, this.state.password)
        .then(
            ()=>{AuthenticatedUser.successfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);
                }
        )
        .catch(
            () => {this.setState({hasLoginFailed: true}});
        );
        */
        AuthenticatedUser.executeJWTAuth(this.state.username, this.state.password)
        .then(
            (response)=>{AuthenticatedUser.successfulLoginForJWT(this.state.username, response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
                }
        )
        .catch(
            () => {this.setState({hasLoginFailed: true});}
        );

    }

}

export default LoginComponent;