import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {NavLink} from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (

        <div className="glow">
          <button onClick={onLogout}>Logout</button>
        </div>
  )
};

export default LogoutButton;
