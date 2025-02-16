import { useContext, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilValue , useRecoilState , useSetRecoilState} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <EvenCountRenderer/>
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    { isEven ? "it is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
        setCount(c => c + 1 );
    }}>Increase</button>

    <button onClick = {() => {
        setCount(c => c - 1);
    }}>Decrease</button>
  </div>
}

export default App

