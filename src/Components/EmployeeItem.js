import React from 'react'
import {Link} from 'react-router-dom';

const EmployeeItem = (props) => {

  const item = props.item || {};

  return <div>

    {item.id} {item.employee_name}

    <Link to={`/employee/${item.id}`}>VIEW</Link>
    <Link to={`/employee/${item.id}/edit`}>EDIT</Link>
    <Link to={`/employee/${item.id}/delete`}>DELETE</Link>

  </div>
}

export default EmployeeItem
