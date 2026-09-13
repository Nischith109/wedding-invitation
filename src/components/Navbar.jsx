import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        About
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Gallery
      </NavLink>

    </nav>
  );
}

export default Navbar;