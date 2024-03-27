import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.status);

 

  return (
    <nav className=" h-[8vh] bg-gray-300 flex items-center ">
      <div className="w-11/12 m-auto flex justify-between items-center font-medium text-xl">
        <div>
          <Link className="tracking-widest"> Akshay Chauhan </Link>
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "hover:text-orange-600"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            {data ? (
              <li>
                <NavLink
                  className="hover:text-orange-600"
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch(logout());
                  }}
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : "hover:text-orange-600"
                  }
                  to="/registration"
                >
                  Register Now
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "hover:text-orange-600"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "hover:text-orange-600"
                }
                to="/user"
              >
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
