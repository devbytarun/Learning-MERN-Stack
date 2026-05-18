import { useState } from 'react'

function Toggle() {
  const [isOn, setIsOn] = useState<boolean>(false)

  return (
    <div>
      <p>Light is: {isOn ? "ON" : "OFF"}</p>
      <button onClick={()=> setIsOn(!isOn)}>Toggle</button>
    </div>
  )
}

export default Toggle