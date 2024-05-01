import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>this is navbar</h1>
            <nav className="flex gap-10 text-blue-500">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/posts'> Posts </NavLink>
                <NavLink to='/users'>User</NavLink>
            </nav>
        </div>
    );
};

export default Header;