import { useState } from 'react'

type User = {
  id: number
  name: string
}

function DynamicList() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Arjun" },
    { id: 2, name: "Sara" },
  ])

  function addUser() {
    const newUser: User = {
      id: users.length + 1,
      name: `User ${users.length + 1}`
    }
    setUsers([...users, newUser])  // spread old + add new
  }

  function removeUser(id: number) {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => removeUser(user.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default DynamicList