import axios from 'axios'

class HelloworldService{
    execute(){
        return axios.get('http://localhost:8080/helloworld');
    }

    executeHelloworld(name){
        /*
        let username = 'vante';
        let password = '1230';
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password);
        */
        return axios.get(`http://localhost:8080/helloworld/path/${name}`
        /*
        ,
        {
            headers: {
                authorization: basicAuthHeader //deal with "No 'Access-Control-Allow-Origin' header is present on the requested resource."
            }
        }*/
        );
        
    }
}


export default new HelloworldService()