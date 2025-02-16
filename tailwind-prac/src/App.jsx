import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { PayoutCard } from './components/PayoutCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex grid grid-cols-3 p-2">
        <PayoutCard title={"Next Payout"} orderCount={"23"} amount={"2,312.23"} underTitle={"Next Payment Date"} paymentDay={"Today"} time={"4:00PM"} />
        <RevenueCard title={"Amount Pending"} orderCount={"13"} amount={"92,312.20"}/>
        <RevenueCard title={"Amount Processed"}  amount={"23,92,312.20"}/>
      </div>
    </>
  )
}

export default App
