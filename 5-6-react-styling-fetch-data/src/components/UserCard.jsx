import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card">
      <Card.Body>

        <div className="d-flex align-items-center mb-3">
          <div className="user-avatar me-3">
            {user.name.charAt(0)}
          </div>
        </div>

        <Card.Title className="mb-0"  >{user.name}</Card.Title>
        <Card.Text className="mb-3">
          <strong>Username:</strong> {user.username}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Phone:</strong> {user.phone}
        </Card.Text>
      {/* Buttotn*/}
              
      <Button onClick={() => onUserClick(user)}>
        View Details
        </Button>


      </Card.Body>
    </Card>
  )
}

export default UserCard
