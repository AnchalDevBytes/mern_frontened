import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative w-full bg-slate-700">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 lg:py-6">
    <div className="inline-flex items-center space-x-2">
      <span className="font-bold text-3xl text-slate-200">Mern</span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <NavLink
            to="/"
            className="text-lg font-normal text-slate-200 hover:text-slate-500"
          >
            Create post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className="text-lg font-normal text-slate-200 hover:text-slate-500"
          >
            All post
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Navbar