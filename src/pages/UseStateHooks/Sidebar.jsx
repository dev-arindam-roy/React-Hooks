import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><NavLink to="/use-state-hook">Application No: 1</NavLink></li>
                <li className="list-group-item"><NavLink to="app2">Application No: 2</NavLink></li>
                <li className="list-group-item"><NavLink to="app3">Application No: 3</NavLink></li>
                <li className="list-group-item"><NavLink to="app4">Application No: 4</NavLink></li>
                <li className="list-group-item"><NavLink to="app5">Application No: 5</NavLink></li>
                <li className="list-group-item"><NavLink to="app6">Application No: 6</NavLink></li>
            </ul>
        </>
    )
}

export default Sidebar