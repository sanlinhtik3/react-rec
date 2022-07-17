import React, { useEffect } from "react";

const App = props => {
  useEffect(()=>{
    const btn = document.getElementById("btn")
    btn.addEventListener('click', _ => {
      console.log('Hello JS')
    })
  }, [])

  return <button id="btn">Click Me</button>
}

export default App;