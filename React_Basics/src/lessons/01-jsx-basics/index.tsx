import ProfileCard from './PorfileCard'
import Counter from './Counter'
import Toggle from './Debug'

function Lesson() {
  return (
    <>
      <ProfileCard name="dev_raj" age={22} isStudent={true} />
      <Counter />
      <Toggle />
    </>
  )
}

export default Lesson