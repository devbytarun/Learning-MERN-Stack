import { useState, useEffect } from "react";

function BadComponent() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
  setData("hello") 
  }, [])

  return <p>{data}</p>;
}

export default BadComponent;
