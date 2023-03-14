import { useState, useEffect, useRef } from "react";
import useConsoleLog from "./useConsoleLog";

export default function App() {
  const [count, setCount] = useState(0);

  useConsoleLog(count);
  

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (<>
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
    <div style={{ padding: "40px" }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </div>
  </>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}