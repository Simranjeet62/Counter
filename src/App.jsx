import Counter from "./Components/Counter";
import CounterText from "./Components/CounterText";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(function () {
    const storedValue = localStorage.getItem("count");
    return storedValue ? JSON.parse(storedValue) : 0;
  });

  useEffect(
    function () {
      localStorage.setItem("count", JSON.stringify(count));
    },
    [count]
  );

  return (
    <>
      <CounterText setCount={setCount} />
      <Counter count={count} setCount={setCount} />;
    </>
  );
}
