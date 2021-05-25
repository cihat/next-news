import React from "react"
import Toolbar from "../components/toobar"

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Toolbar />
      {children}
    </div>
  )
}

export default Layout
