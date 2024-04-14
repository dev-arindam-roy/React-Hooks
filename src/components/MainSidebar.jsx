import React from 'react'
import { NavLink } from 'react-router-dom'

const MainSidebar = () => {
    return (
        <>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><NavLink to="/use-state-hook">useState Hook</NavLink></li>
                <li class="list-group-item"><NavLink to="/use-effect-hook">useEffect Hook</NavLink></li>
            </ul>
        </>
    )
}

export default MainSidebar