import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'
import EmployeeItem from './EmployeeItem'

class EmployeeList extends Component {

  state = {
    items: []
  };

  componentDidMount() {

    EmployeeService.getList().then(items => {
      this.setState({items: items})
    })

  }

  render() {

    const items = this.state.items.map((item) => {

        return <EmployeeItem
          key={item.id}
          item={item}
          />
    });

    return <div>
      <h1>Employee list</h1> <Link to="/employee/create">Add Employee</Link>
      {items}
    </div>
}}

export default EmployeeList
