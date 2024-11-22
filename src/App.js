import { useState } from "react";
import "./index.css"
function App() {
  return (
    <div className="app">
      <CountDays />
    </div>
  );
}

function CountDays() {
  const [steps, setSteps] = useState(1);
  const [days, SetDays] = useState(0);

  const decrementStep = () => {
    setSteps(current => current -1);
  }

  const incrementStep = () => {
    setSteps(current => current + 1);
  }

  const incrementDay = () => {
    SetDays(current => current + steps);
  }

  const decrementDay = () => {
    SetDays(current => current - steps);
  }

  return (
    <>
      <div className="step-container">
        <button onClick={decrementStep}>-</button>
        <h2>Step: {steps}</h2>
        <button onClick={incrementStep}>+</button>
      </div>
      <div className="day-container">
        <button onClick={decrementDay}>-</button>
        <h2>Count: {days}</h2>
        <button onClick={incrementDay}>+</button>
      </div>
      <P days={days}/>
    </>
  )
}

function P({ days }) {
  const weekDays = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"];
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const date = now.getDate();
  const time = weekDays[day] + " " + date + "-" + month + "-" + year;
  if (days === 0) {
    return <h2>Today is {time}</h2>
  } else if (days > 0) {
    return <h2>It's {days} days until {time} </h2>
  } else {
    return <h2>It's been {-days} days since {time}</h2>
  }
}

export default App;
