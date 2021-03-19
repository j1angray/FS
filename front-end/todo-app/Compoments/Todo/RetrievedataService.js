import axios from 'axios'
import {API_URL, JPA_API_URL} from '../../configs'

class RetrievedataService{

    executeRetrieve(name){
        //http://localhost:8080/users/vante/todos
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    executeRetrieveItem(name, id){
        //http://localhost:8080/users/vante/todos/1
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    executeDelete(name, id){
        //http://localhost:8080/users/vante/todos/1
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    executeUpdate(name, id, todoItem){
        //http://localhost:8080/users/vante/todos/1
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todoItem);
    }

    executeAdd(name, todoItem){
        //http://localhost:8080/users/vante/todos
        return axios.post(`${JPA_API_URL}/users/${name}/todos`, todoItem);
    }

}

export default new RetrievedataService()