import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'
import EmployeeService from '../Services/EmployeeService'
import image from '../logo.svg'

class EmployeeDelete extends Component {

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

  deleteAction = (event) => {
    event.preventDefault()

    EmployeeService.deleteById(this.state.id).then(() => {
      this.props.history.push('/employee')
    });
  }

  CancelAction = (event) => {
    event.preventDefault()
    this.props.history.push('/employee')
  }

  render() {

    return (
      <div>
        <Link className="ui button" to="/">Back to Employee list</Link>

        <div>
          Are you sure you want to delete employee
          <Image avatar size='tiny' src={this.state.employee_image || image} />
          {this.state.employee_name} ?

        </div>
        <div>
            <Button color='red' onClick={this.deleteAction}>Delete</Button>
            <Button onClick={this.CancelAction}>Cancel</Button>
        </div>

      </div>
    );

  }
}

export default withRouter(EmployeeDelete)
