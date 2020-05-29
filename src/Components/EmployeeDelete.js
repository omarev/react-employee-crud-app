import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
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
        <Link to="/">Back to Employee list</Link>

        <div>
          Are you sure you want to delete employee
          <img src={this.state.employee_image || image} alt="Employee" />
          {this.state.employee_name} ?

        </div>
        <div>
            <button onClick={this.deleteAction}>Delete</button>
            <button onClick={this.CancelAction}>Cancel</button>
        </div>

      </div>
    );

  }
}

export default withRouter(EmployeeDelete)
