import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <NavLink exact activeClassName="current" to="/">
        <li>Accueil</li>
      </NavLink>

      <NavLink exact activeClassName="current" to="/apropos">
        <li>CV</li>
      </NavLink>

      <NavLink exact activeClassName="current" to="/projets">
        <li>Projets</li>
      </NavLink>

      <NavLink exact activeClassName="current" to="/contact">
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}

export default Navigation;
