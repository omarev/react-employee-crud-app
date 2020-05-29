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
      <div className="ui masthead vertical segment">

        <div className="ui stackable two column grid">
          <div className="column">

            <h2 className="ui header">

              <i aria-hidden="true" className="users icon"></i>
              <div className="content">
                Employee view
                <div className="sub header">Manage employee data</div>
              </div>

            </h2>
            <br/>
          </div>
          <div className="column">
          </div>
        </div>

        <Link className="ui button floated right" to="/"><i className="icon chevron left"></i> Back to Employee list</Link>

        <div className="ui divider"></div>

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
