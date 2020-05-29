import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import EmployeeService from '../Services/EmployeeService'

class EmployeeEdit extends Component {

  state = {
    id: null,
    employee_name: '',
    employee_age: '',
    employee_salary: '',
    employee_image: ''
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      EmployeeService.get(id).then(data => {
        this.setState(data)
      });
    }
  }

  changeNameHandler = (event) => {
    this.setState({employee_name: event.target.value || ''})
  }

  changeAgeHandler = (event) => {
    this.setState({employee_age: event.target.value || ''})
  }

  changeSalaryHandler = (event) => {
    this.setState({employee_salary: event.target.value || ''})
  }

  changeImageHandler = (event) => {
    this.setState({employee_image: event.target.value || ''})
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.id) {
      EmployeeService.update(this.state.id, this.state).then(data => {
        this.setState(data)
      });
    } else {
      EmployeeService.create(this.state).then(data => {
        console.log(data);
        this.setState(data);
        this.props.history.push('/employee/' + this.state.id + '/edit')
      });
    }

  }

  render() {

    return (

      <Form onSubmit={this.submitHandler}>
        <Link className="ui button" to="/">Back to Employee list</Link>

        <Form.Field>
          <label>Name:</label>
          <input onChange={this.changeNameHandler} value={this.state.employee_name || ''} />
        </Form.Field>

        <Form.Field>
          <label>Age:</label>
          <input onChange={this.changeAgeHandler} value={this.state.employee_age|| ''} />
        </Form.Field>

        <Form.Field>
          <label>Salary:</label>
          <input onChange={this.changeSalaryHandler} value={this.state.employee_salary || ''} />
        </Form.Field>

        <Form.Field>
          <label>Image</label>
          <input placeholder='Image' onChange={this.changeImageHandler} value={this.state.employee_image || ''} />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );

  }
}

export default withRouter(EmployeeEdit)
