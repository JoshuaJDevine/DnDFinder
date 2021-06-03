import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import "./NavBar.css"
import CreateNewGroupModal from "../modals/CreateNewGroupModal";
import {useSelector} from "react-redux";
import DemoUserModal from "../modals/DemoUserModal";

const NavBar = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
      <nav className="DnD__Navbar">
        <ul className="DnD__Navbar--ul">
          <li>
            {sessionUser ?
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
              :
              <>
              </>
            }
          </li>
          <li>
            {!sessionUser ?
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
              :
              <>
              </>
            }
          </li>
          <li>
            {!sessionUser ?
              <DemoUserModal/>
              :
              <>
              </>
            }
          </li>
          <li>
            {!sessionUser ?
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
              :
              <>
              </>
            }
          </li>
          <li>
            {sessionUser ?
              <NavLink to="/users" exact={true} activeClassName="active">
                Users
              </NavLink>
              :
              <>
              </>
            }
          </li>
          <li>
            {sessionUser ?
              <LogoutButton />
              :
              <>
              </>
            }
          </li>
            {sessionUser ?
              <li>
                <CreateNewGroupModal/>
              </li>
              :
              <>
              </>
            }
        </ul>
      </nav>
    );
}

export default NavBar;
