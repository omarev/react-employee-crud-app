import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'
import image from '../logo.svg'
class EmployeeView extends Component {

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

  render() {

    return (
      <div>
        <Link to="/">Back to Employee list</Link>

        <div>
          <img src={this.state.employee_image || image} alt="Employee" />
          {this.state.employee_name}
        </div>

        <div>
          <strong>Age:</strong>
          {this.state.employee_age}
        </div>

        <div>
          <strong>Salary:</strong>
          {this.state.employee_salary}
        </div>

      </div>
    );

  }
}

export default withRouter(EmployeeView)
