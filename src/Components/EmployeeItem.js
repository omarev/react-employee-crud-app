import React from 'react'
import {Link} from 'react-router-dom';
import {Image, List, Reveal} from 'semantic-ui-react'
import image from '../logo.svg'

const EmployeeItem = (props) => {

  const item = props.item || {};

  return (
    <List.Item>
      <List.Content floated='right'>
        <Link className="ui button green small" to={`/employee/${item.id}`}><i className="icon eye"></i> VIEW</Link>
        <Link className="ui button blue small" to={`/employee/${item.id}/edit`}><i className="icon pencil"></i> EDIT</Link>
        <Link className="ui button red small" to={`/employee/${item.id}/delete`}><i className="icon trash"></i> DELETE</Link>
      </List.Content>
      <Reveal.Content hidden>
        <Image avatar src={item.employee_image || image} />
      </Reveal.Content>
      <List.Content>{item.id} {item.employee_name}</List.Content>
    </List.Item>
)
}

export default EmployeeItem
