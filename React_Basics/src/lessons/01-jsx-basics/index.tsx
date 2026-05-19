import ProfileCard from "./PorfileCard";
import Counter from "./Counter";
import Timer from "./timer";
import UserList from "./UserList";

function Lesson() {
  return (
    <>
      <ProfileCard name="dev_raj" age={22} isStudent={true} />
      <Counter />
      <Timer />
      <UserList />
    </>
  );
}

export default Lesson;
