import {Component} from 'react'

import axios from 'axios'

class EmployeeService extends Component {

  static url = process.env.REACT_APP_EMPLOYEE_SERVICE_ENDPOINT
  
  static get(id) {
    return axios.get(this.url + '/' + id)
        .then(res => {
          return res.data;
        })
  }

  static getList() {
    console.log(this.url)
    return axios.get(this.url)
        .then(res => {
          return res.data;
        })
  }

  static deleteById(id) {
    return axios.delete(this.url + '/' + id)
  }

  static create(data) {
    return axios.post(this.url, data).then(res => {
      return res.data;
    });
  }

  static update(id, data) {
    return axios.put(this.url + '/' + id, data).then(res => {
      return res.data;
    });
  }
}

export default EmployeeService
