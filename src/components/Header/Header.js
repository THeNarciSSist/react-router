import "./Header.css"

import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="navigation-block">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink
              exact
              to="/"
              style={(isActive) => ({
                color: isActive ? "white" : "grey",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to="/posts"
              style={(isActive) => ({
                color: isActive ? "white" : "grey",
              })}
            >
              Posts
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to="/photos"
              style={(isActive) => ({
                color: isActive ? "white" : "grey",
              })}
            >
              Photos
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to="/contacts"
              style={(isActive) => ({
                color: isActive ? "white" : "grey",
              })}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
