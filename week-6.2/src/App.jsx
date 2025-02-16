import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [ counter , setCounter] = useState(0);
  const [ inputvalue , setInputValue ] = useState(1);

  let count = useMemo(() => {
    let finalcount = 0;
    for (let i = 0 ; i <= inputvalue ; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputvalue] );
  

  return <div>
  <input onChange={function (e) {
    setInputValue(e.target.value);
  }} placeholder={"Find sum from 1 to n "}></input>
  <br/>
  Sum from 1 to {inputvalue } is {count}
  <br/>
  <button onClick = {() => {
    setCounter(counter + 1);
  } } > Counter {counter}</button>
  </div>
}




export default App;