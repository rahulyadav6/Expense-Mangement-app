import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from './components/ProtectedRoute'


// import { useState } from 'react'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/"  element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
