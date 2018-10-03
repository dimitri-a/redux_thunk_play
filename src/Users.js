import React from 'react'

export default ({users}) => {
  return (
    <ul>
      {users.map(user => <ul>{user}</ul>)}
    </ul>
  )
}
