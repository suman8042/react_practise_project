import Navbar from "./component/Navbar"
import Card from "./component/Card"
import titles from './title.json';
import { useState } from "react";

function App() {
 const [count , setcount]=useState(0)

  return (
    <>
    <Navbar/>
<div className="h-48">
    <button className="h-20 w-24 bg-amber-500" onClick={() => setcount(count + 1)}>{count}</button></div>
    <div className="flex justify-center gap-4 bg-red-300">
        {titles
        .map((item) => (
  <Card  key={item.id} tit={item.id} desc={item.title} />
 

))}
</div> 


    </>
  )
}

export default App
