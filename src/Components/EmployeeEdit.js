import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
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

      <form onSubmit={this.submitHandler}>
        <Link to="/">Back to Employee list</Link>

        <div>
          <strong>Name:</strong>
          <input onChange={this.changeNameHandler} value={this.state.employee_name || ''} />
        </div>

        <div>
          <strong>Age:</strong>
          <input onChange={this.changeAgeHandler} value={this.state.employee_age|| ''} />
        </div>

        <div>
          <strong>Salary:</strong>
          <input onChange={this.changeSalaryHandler} value={this.state.employee_salary || ''} />
        </div>

        <div>
          <strong>Image:</strong>
          <input onChange={this.changeImageHandler} value={this.state.employee_image || ''} />
        </div>
        <input type="submit" value="Save" />
      </form>
    );

  }
}

export default withRouter(EmployeeEdit)
