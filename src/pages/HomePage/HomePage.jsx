import React from 'react'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      This is HomePage
      <Outlet/>
    </div>
  )
}

export default HomePage
