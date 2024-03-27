import React from "react"
import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/Home"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/authContext"

const App = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
