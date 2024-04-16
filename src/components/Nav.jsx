import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userLogo from "../assets/user.png";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/offers">User Offers</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg" id="sidebar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn text-xl md:text-3xl font-bold underline hover:shadow-xl">
          The Reez
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Link to="/userProfile" className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" className="rounded-full animate__animated hover:animate__heartBeat" src={user?.photoURL || userLogo} />
              </Link>
            </div>
            <button
              onClick={handleLogOut}
              className="px-7 py-1 text-white text-xl font-semibold hover:bg-gray-600 hover:text-black active:scale-95 rounded-none bg-slate-900"
            >
              Sing out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-7 py-1 text-white text-base md:text-xl font-semibold hover:bg-gray-600 hover:text-black active:scale-95 rounded-none bg-slate-900">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
