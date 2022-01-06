import React from "react"
import Card from "./Components/Card"


const App = () => {
  return (
      <div className="w-full h-full items-center py-8">
        <h1 className="text-center text-2xl font-bold">NASA API</h1>
        <h2 className="text-center mt-4 mb-8 text-xl">Astronomy Picture of the Day</h2>
        <Card/>
      </div>
  )
}

export default App