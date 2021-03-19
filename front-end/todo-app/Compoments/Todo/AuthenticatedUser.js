import axios from 'axios'
import {API_URL} from '../../configs'

//export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'AuthenticatedUser'

class AuthenticatedUser {

    createJWTToken(token){
        return ('Bearer ' +  token);
    }

    executeJWTAuth(username, password){
        return axios.post(`${API_URL}/authenticate`, 
        {username, password});
    }

    successfulLoginForJWT(username, token){
        sessionStorage.setItem("authenticatedUser", username);
        this.setAxiosInterceptorsforJWT(this.createJWTToken(token));
    }

    setAxiosInterceptorsforJWT(token){
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedin()) {
                    config.headers.authorization = token
                }
                return config
            }
        );
    }

    //

    getBasicAuthToken(username, password){
        return ('Basic ' +  window.btoa(username + ":" + password)); //basicAuthHeader
    }

    executeBasicAuthBean(username, password){
        return axios.get(`${API_URL}/basicauth`, 
        {headers: {authorization: this.getBasicAuthToken(username, password)}});
    }

    successfulLogin(username, password){
        //console.log('Successfully Login')
        sessionStorage.setItem("authenticatedUser", username);
        this.setAxiosInterceptors(this.getBasicAuthToken(username, password));
    }

    successfulLogout(username){
        //console.log('Successfully Logout')
        sessionStorage.removeItem("authenticatedUser");
    }

    isLoggedin(){
        let user = sessionStorage.getItem("authenticatedUser");
        if (user === null) return false;
        return true;
    }

    getLoggedinUser(){
        let user = sessionStorage.getItem("authenticatedUser");
        if (user === null) return '';
        return user;
    }

    setAxiosInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedin()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        );
    }
}

export default new AuthenticatedUser();