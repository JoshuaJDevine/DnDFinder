import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
            {sessionUser ?
              <li>
                  <NavLink to="/" exact={true} activeClassName="active">
                      <div className="glow">
                          <button>Home</button>
                      </div>
                  </NavLink>
              </li>
              :
              <>
              </>
            }
            {!sessionUser ?
                <li>
                  <NavLink to="/login" exact={true} activeClassName="active">
                      <div className="glow">
                          <button>Login</button>
                      </div>
                  </NavLink>
                </li>
                :
                <>
                </>
            }
            {!sessionUser ?
                <li>
                    <DemoUserModal/>
                </li>
                :
                <>
                </>
            }
            {!sessionUser ?
              <li>
                  <NavLink to="/sign-up" exact={true} activeClassName="active">
                      <div className="glow">
                          <button>Signup</button>
                      </div>
                  </NavLink>
                </li>
              :
              <>
              </>
            }
            {sessionUser ?
              <li>
                  <NavLink to="/users" exact={true} activeClassName="active">
                      <div className="glow">
                          <button>Users</button>
                      </div>
                  </NavLink>
              </li>
              :
              <>
              </>
            }
            {sessionUser ?
              <li>
                  <LogoutButton />
              </li>
                  :
                  <>
                  </>
            }
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
