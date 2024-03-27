import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
