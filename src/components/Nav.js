import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  
  const [isActive, setActive] = useState("true");

  const handlerToggle = () =>{
    setActive(!isActive); 
  }

  return (
    <>
      <nav>
        <div className="nav_left_elements">
          <h2>strips</h2>
        </div>
        <div className="right_elements">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/service"
              >
                service
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/about"
              >
                about us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/contact"
              >
                contact us
              </NavLink>
            </li>
          </ul>
        </div>

    {/* media queries */}

        <div className="shortmenu">
          <button onClick={handlerToggle} className="toggler"><i class="fa fa-bars" aria-hidden="true"></i></button>
          <div className={isActive ? "togglerSetmenu" : null}>
          <div className="menusBtn">
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="activePage"
                  className="btnSet2"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="activePage"
                  className="btnSet2"
                  to="/service"
                >
                  service
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="activePage"
                  className="btnSet2"
                  to="/about"
                >
                  about us
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="activePage"
                  className="btnSet2"
                  to="/contact"
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
