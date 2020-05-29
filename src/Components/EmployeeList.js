import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {List, Input} from 'semantic-ui-react'
import EmployeeService from '../Services/EmployeeService'
import EmployeeItem from './EmployeeItem'

class EmployeeList extends Component {

  state = {
    items: [],
    searchWord: '',
    sortAsc: true,
    sortProp: 'id'
  };

  componentDidMount() {

    EmployeeService.getList().then(items => {
      this.setState({items: items})
    })

  }

  toggleSort = (sortProp) => {
    this.setState({sortProp: sortProp});
    this.setState({sortAsc: !this.state.sortAsc});
  }

  render() {

    const items = this.state.items.filter((obj, key) => {
        return obj.employee_name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1;
      } ).sort((a, b) => {
        const sortProp = this.state.sortProp;
        const sortAsc = this.state.sortAsc;
        const sortMod = (sortAsc ? 1 : -1);

        if (sortProp === 'employee_name') {
              return sortMod * (a[sortProp].localeCompare(b[sortProp]));
        } else {
           if(parseInt(a[sortProp]) < parseInt(b[sortProp]))
             return -1 * sortMod;
           else if(parseInt(a[sortProp]) > parseInt(b[sortProp]))
             return 1 * sortMod;
          return 0;
        }

    }).map((item) => {

        return <EmployeeItem
          key={item.id}
          item={item}
          />
    });

    return <div className="ui masthead vertical segment">

    <div className="ui stackable two column grid">
      <div className="column">
        <h2 className="ui header">

          <i aria-hidden="true" className="users icon"></i>
          <div className="content">
            Employee list
            <div className="sub header">Manage employee data</div>
          </div>

        </h2>
        <br/>
      </div>
      <div className="column ul floated right">
        <div className="ui right floated menu">
          <div className="menu ">
                <Input
                      action={{ color: 'blue', content: 'Search' }}
                      icon='search'
                      iconPosition='left'
                      placeholder='search by name'
                      value={this.state.searchWord}
                      onChange={e => this.setState({ searchWord: e.currentTarget.value })}
                    />
          </div>
        </div>

      </div>

      <Link className="ui button floated right green" to="/employee/create"><i className="icon plus"></i> Add Employee</Link>
    </div>

    <br/>

    <span onClick={this.toggleSort.bind(this, 'id')}>id <i className={`icon sort numeric ${this.state.sortProp === 'id' ? ( this.state.sortAsc ? 'down' : 'up') : 'disabled'}`}></i></span>&nbsp; | &nbsp;
    <span onClick={this.toggleSort.bind(this, 'employee_name')}>name <i className={`icon sort alphabet ${this.state.sortProp === 'employee_name' ? ( this.state.sortAsc ? 'down' : 'up') : 'disabled'}`}></i></span>

    <div className="ui divider"></div>


      <List divided verticalAlign='middle' size='large'>
        {items}
      </List>
    </div>
}}

export default EmployeeList
