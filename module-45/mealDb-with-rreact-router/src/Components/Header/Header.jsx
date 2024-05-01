import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            {/* <Link to='/' >Home</Link>
            <Link to='/explore' >Explore</Link>
            <Link to='/meals' >Meals</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link> */}
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to='/' >Home</NavLink>
        <NavLink to='/meals' >Meals</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-extrabold text-4xl">MealDB</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl flex gap-5 font-semibold">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/meals' >Meals</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Header;