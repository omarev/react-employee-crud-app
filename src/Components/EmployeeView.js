import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { Image } from 'semantic-ui-react'
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
        <Link className="ui button" to="/">Back to Employee list</Link>

        <div>
          <Image avatar size='tiny' src={this.state.employee_image || image} />
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
