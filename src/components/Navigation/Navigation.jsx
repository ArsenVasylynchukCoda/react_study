import { NavLink } from "react-router-dom"
import './Navigation.css'

function Navigation () {
    return (
        <nav className="navigation">
            <NavLink className={({isActive}) => isActive ? 'active' : null} to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/todo'>Todo</NavLink>
        </nav>
    )
}

export default Navigation