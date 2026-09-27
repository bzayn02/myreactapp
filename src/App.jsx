import { useEffect, useState } from 'react'

import './App.css'

function Counter({startAt}) {
const [count, setCount]=useState(()=>{
  const savedCount = localStorage.getItem("count")
  return savedCount !==null ? Number(savedCount):startAt
})

  
 useEffect(()=>{
localStorage.setItem("count", count) 
 }, [count])

  return (
    <>
     <div>
      <p>Clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>

     </div>
    </>
  )
}

export default Counter
