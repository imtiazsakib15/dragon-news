import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-6">
      <div>
        <Link to="/">
          <h3 className="text-3xl font-bold">Pass Auth</h3>
        </Link>
      </div>
      <div className="font-semibold text-lg space-x-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 " : "")}
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
