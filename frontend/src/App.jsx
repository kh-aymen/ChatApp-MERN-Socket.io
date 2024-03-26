import React from "react"
import "./App.css"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home />
    </div>
  )
}

export default App
