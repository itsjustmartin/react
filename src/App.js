import React from "react";
import "./App.css";


export default function App() {
  const [toggle,setToggle] = React.useState(false);

  const clickHandler = ()=>{
    setToggle(!toggle);
  }
  // just one time invoke
  // React.useEffect(()=>{
  //   document.title = toggle ? "welcome to Little Lemon" : "using Side Effect" 
  // },[]);
  // evrey time toggle change 
  React.useEffect(()=>{
    document.title = toggle ? "welcome to Little Lemon" : "using Side Effect" 
  },[toggle]);

  // React.useEffect(()=>{
  //   document.title = toggle ? "welcome to Little Lemon" : "using Side Effect" 
  // });

  return (
    <div>
      <h1> using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>welcome to Little Lemon</h2>}
    </div>
  )
}