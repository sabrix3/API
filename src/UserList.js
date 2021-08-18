import React from 'react'
import { ListGroup } from 'react-bootstrap';

const UserList = ({users}) => {
    return (
        <div>
            {users.map((el) => (
        <div className="l" key={el.id}>
          <ListGroup.Item style={{background:'rgb(122, 141, 163)'}}> <h4 className="id">ID: {el.id}</h4> </ListGroup.Item>
          <ListGroup.Item>Name: {el.name} </ListGroup.Item>
          <ListGroup.Item>Username:  {el.username}</ListGroup.Item>
          <ListGroup.Item>Email: {el.email}</ListGroup.Item>
          <ListGroup.Item>Street: {el.address.street   }</ListGroup.Item>
          <ListGroup.Item>Suite: {el.address.suite }</ListGroup.Item>
          <ListGroup.Item>Phone: {el.phone}</ListGroup.Item>
          <ListGroup.Item>Website:  {el.website}</ListGroup.Item>
          <ListGroup.Item>Company Name:  {el.company.name}</ListGroup.Item>
          <ListGroup.Item>Company bs:  {el.company.bs}</ListGroup.Item>
        </div>
      ))}
        </div>
    )
}

export default UserList