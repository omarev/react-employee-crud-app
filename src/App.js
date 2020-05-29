import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import EmployeeList from './Components/EmployeeList'
import EmployeeView from './Components/EmployeeView'
import EmployeeEdit from './Components/EmployeeEdit'
import EmployeeDelete from './Components/EmployeeDelete'
import EmployeeService from './Services/EmployeeService'

class App extends Component {

  state = {
    items: []
  };

  componentDidMount() {

    EmployeeService.getList().then(items => {
      this.setState({items: items})
    })

  }

  render() {

      return (
      <div className="ui container">

        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/employee" />
            </Route>
            <Route path="/employee" exact>
              <EmployeeList/>
            </Route>
            <Route path="/employee/create" exact>
              <EmployeeEdit/>
            </Route>
            <Route path="/employee/:id" exact>
              <EmployeeView/>
            </Route>
            <Route path="/employee/:id/edit" exact>
              <EmployeeEdit/>
            </Route>
            <Route path="/employee/:id/delete" exact>
              <EmployeeDelete/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      )
  }
}

export default App;
