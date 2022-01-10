import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./MainNavigator.module.css";

function MainNavigator(props) {
  let navigator;

  if (props.isLoggedIn) {
    navigator = (
      <Fragment>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/repeat"
          >
            Repeat
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/errors"
          >
            Errors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/user"
          >
            User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/items"
          >
            Items
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/animals"
          >
            Animals
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/mounts"
          >
            Mounts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/clans"
          >
            Clans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/log-out"
          >
            Log Out
          </NavLink>
        </li>
      </Fragment>
    );
  } else {
    navigator = (
      <Fragment>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName={classes.active}
            className="nav-link"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </Fragment>
    );
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/welcome">
          Language Repetition App
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{ "margin-left": "auto" }}>
            {navigator}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigator;
