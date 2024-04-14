import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><NavLink to="/use-effect-hook">Application No: 1</NavLink></li>
                <li className="list-group-item"><NavLink to="app2">Application No: 2</NavLink></li>
            </ul>
        </>
  )
}

export default Sidebar