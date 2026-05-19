import ProfileCard from './PorfileCard'
import Counter from './Counter'
import Timer from './timer'

function Lesson() {
  return (
    <>
      <ProfileCard name="dev_raj" age={22} isStudent={true} />
      <Counter />
      <Timer />
    </>
  )
}

export default Lesson