import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/">
          Accueil
        </NavLink>
      </li>

      <li>
        <NavLink exact activeClassName="current" to="/apropos">
          CV
        </NavLink>
      </li>

      <li>
        <NavLink exact activeClassName="current" to="/projets">
          Projets
        </NavLink>
      </li>

      <li>
        <NavLink exact activeClassName="current" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
