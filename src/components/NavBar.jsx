import {NavLink } from "react-router-dom";
import Button from "./Button";
import defaultUser from './../assets/user.png';

const NavBar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8">
      <div></div>
      <div className="font-semibold text-lg space-x-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 underline" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 underline" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 underline" : "")}
          to="/career"
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-10 h-10 rounded-full" src={defaultUser} alt="" />
        <Button text="Login" />
      </div>
    </div>
  );
};

export default NavBar;
