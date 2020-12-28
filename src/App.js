import { useState } from 'react'
import React from 'react'
const App=(props)=>{
  const [num,setNum]=useState(1);
  const handleClick=()=>{
    setNum(num+1);
  }
  var arr=[56,1,3,5,1,86,12,86];
  arr.sort((a,b)=>{
    return a-b;
  })
  return(
    <div>
    <button onClick={()=>handleClick()}>Click here</button>
    <h1>{num}</h1>
  <h1>{arr.map((num)=>{return num+" ";})}</h1>
    </div>
  )
}

export default App;
