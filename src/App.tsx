import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import SchoolList from "./features/schools/SchoolList"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SchoolList />} />
            <Route path="Schools" element={<SchoolList />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>404</h2>
    </div>
  )
}
