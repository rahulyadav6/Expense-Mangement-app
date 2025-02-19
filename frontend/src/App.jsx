import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signuppage} from "./components/Signuppage"
import { Layout } from "./components/Layout"
import {Loginpage} from './components/Loginpage'
import { Landingpage } from "./components/Landingpage"
import { NotFoundPage } from "./components/NotFoundPage"

// import { useState } from 'react'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/"  element={<Landingpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/signin" element={<Loginpage />} />
          <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
