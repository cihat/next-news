import React from "react"
import Toolbar from "../components/toobar"

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      {children}
    </>
  )
}

export default Layout
