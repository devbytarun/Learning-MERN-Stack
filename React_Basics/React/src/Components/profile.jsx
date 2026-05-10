import { useState } from 'react'

function Profile({ name, role }) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div>
      <h1>{name}</h1>
      <p>{role}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default Profile
