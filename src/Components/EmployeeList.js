import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {List, Input} from 'semantic-ui-react'
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

    return <div className="ui masthead vertical segment">

    <div className="ui stackable two column grid">
      <div className="column">
        <h2 class="ui header">

          <i aria-hidden="true" class="settings icon"></i>
          <div class="content">
            Employee list
            <div class="sub header">Manage employee data</div>
          </div>

        </h2>
      </div>
      <div className="column ul floated right">
        <div className="ui right floated menu">
          <div className="menu ">
                <Input
                      action={{ color: 'blue', content: 'Search' }}
                      icon='search'
                      iconPosition='left'
                      placeholder='name'
                    />
          </div>
        </div>

      </div>

      <Link className="ui button floated right green" to="/employee/create">Add Employee</Link>
    </div>

    <br/>

    <div class="ui divider"></div>

      <List divided verticalAlign='middle' size='large'>
        {items}
      </List>
    </div>
}}

export default EmployeeList
