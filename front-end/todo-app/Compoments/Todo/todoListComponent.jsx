import React, { Component } from 'react';
import RetrievedataService from './RetrievedataService'
import AuthenticatedUser from './AuthenticatedUser'
import moment from 'moment';

class todoListComponent extends Component {
    
    constructor(props){
        super(props);
        
        /*
        this.state = {
            items: [
                {id: 1, description: "full-stack course", markDone: false, deadLine: new Date()},
                {id: 2, description: "massage", markDone: false, deadLine: new Date()}]
        };
        */
        this.state = {
            items: [],
            message: null};

        this.refreshTodoList = this.refreshTodoList.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.updateClicked = this.updateClicked.bind(this);
        this.addClicked = this.addClicked.bind(this);
    }

    componentDidMount(){ //a life cycle method 
        this.refreshTodoList();
    }

    refreshTodoList(){
        let username = AuthenticatedUser.getLoggedinUser();
        RetrievedataService.executeRetrieve(username)
        //.then(response =>console.log(response));
            .then(response => {this.setState({items: response.data})});
    }

    deleteClicked(id){
        let username = AuthenticatedUser.getLoggedinUser();
        //console.log(id + ", " + username);
        RetrievedataService.executeDelete(username, id)
            .then(
                response => {
                    this.setState({message: `Successfully Delete todoItem ${id}`});
                    this.refreshTodoList();
                }
            )
    }

    updateClicked(id){
        //console.log("update " + id);
        this.props.history.push(`/todos/${id}`)
    }

    addClicked(){
        this.props.history.push(`/todos/-1`)
    }

    render() {
        return (
            <>
            <div>
                <h2>{AuthenticatedUser.getLoggedinUser()}'s To-do List</h2>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <table className="table">
                <thead>
                    <tr> 
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Finished</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.items.map( // map(): creates a new array on every element in the calling array
                        item =>
                            <tr>
                            <td>{item.description}</td>
                            <td>{moment(item.deadline).format('llll')}</td>
                            <td>{item.finished.toString()}</td>
                            <td><button className="btn" onClick = {() => this.updateClicked(item.id)}>Update</button></td>
                            <td><button className="btn" onClick = {() => this.deleteClicked(item.id)}>Delete</button></td>
                            </tr>
                    )
                }
                </tbody>
                </table>
                <div>
                    <button onClick = {this.addClicked}>Add</button>
                </div>
            </div>
            </>
        )
    }
}

export default todoListComponent;