import React, {Component} from 'react';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import RetrievedataService from './RetrievedataService'
import AuthenticatedUser from './AuthenticatedUser'

class todoComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: '',
            deadline: moment(new Date()).format('YYYY-MM-DD'),
            targets: '...'
        };

        this.submitUpdate = this.submitUpdate.bind(this);
        this.validateValues = this.validateValues.bind(this);
    }

    componentDidMount(){
        if (this.state.id === -1) {
            return
        }
        let username = AuthenticatedUser.getLoggedinUser();
        RetrievedataService.executeRetrieveItem(username, this.state.id)
        .then(response => this.setState(
            {description: response.data.description,
                deadline: moment(response.data.deadline).format('YYYY-MM-DD')}));
                    
        }

    validateValues(values){
        let errorMessages = {}
        if (!values.description) {
            errorMessages.description = 'Please add a description.'
        } 
        //if (moment(values.deadline).diff(moment(this.state.deadline)) > 0) {
        if (!moment(values.deadline).isValid()) {
            errorMessages.deadline = 'Please enter a valid date.'
        }
        return errorMessages;
    }

    submitUpdate(values){
        //console.log(this.validateValues(values));
        //console.log(values);
        let username = AuthenticatedUser.getLoggedinUser();
        let UpdatedTodo = {
            id: this.state.id,
            description: values.description,
            deadline: values.deadline,
            targets: values.targets
        }
        if(this.state.id === -1){
            RetrievedataService.executeAdd(username, UpdatedTodo)
            .then(() => this.props.history.push('/todos'));
        }
        else{ 
            RetrievedataService.executeUpdate(username, this.state.id, UpdatedTodo)
            .then(() => this.props.history.push('/todos'));
        }
    }

    render() {
        let initialState = this.state;

        return (
            <div>
                <h2>This is the page for todoItem {this.props.match.params.id}.</h2>
                <Formik 
                    initialValues={initialState}
                    onSubmit={this.submitUpdate}
                    validate={this.validateValues}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    >
                    {props => (
                    <Form>
                        <fieldset>
                            <label>Description</label>
                            <Field className="form-control" type="text" name="description"/>
                        </fieldset>
                        <fieldset>
                            <label>Deadline</label>
                            <Field className="form-control" type="text" name="deadline"/>
                        </fieldset>
                        <fieldset>
                            <label>Targets</label>
                            <Field className="form-control" type="text" name="targets"/>
                        </fieldset>
                        <button className="btn" type="submit">Save</button>

                        <ErrorMessage className="alert alert-warning" name="description" component="div"/>
                        <ErrorMessage className="alert alert-warning" name="deadline" component="div"/>
                    </Form>)
                    }
                </Formik>
            </div>
        )
    }
}

export default todoComponent;