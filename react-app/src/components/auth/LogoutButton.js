import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {NavLink} from "react-router-dom";

const LogoutButton = ( {setViewingGroup} ) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
    setViewingGroup(0)
  };

  return (

        <div className="glow-dark">
          <button onClick={onLogout}>Logout</button>
        </div>
  )
};

export default LogoutButton;
