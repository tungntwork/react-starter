import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <ul className='hoidanit'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}

export default Header;