import React from 'react'
import {Link} from 'react-router-dom';
import {Image, List, Reveal} from 'semantic-ui-react'
import image from '../logo.svg'

const EmployeeItem = (props) => {

  const item = props.item || {};

  return (
    <List.Item>
      <List.Content floated='right'>
        <Link className="ui button green" to={`/employee/${item.id}`}>VIEW</Link>
        <Link className="ui button blue" to={`/employee/${item.id}/edit`}>EDIT</Link>
        <Link className="ui button red" to={`/employee/${item.id}/delete`}>DELETE</Link>
      </List.Content>
      <Reveal.Content hidden>
      <Image avatar src={item.employee_image || image} />
      </Reveal.Content>

      <List.Content>{item.id} {item.employee_name}</List.Content>
    </List.Item>
)
}

export default EmployeeItem
