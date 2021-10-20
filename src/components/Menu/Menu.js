import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../styles/_menu.scss";
// import OpenMenu from "./OpenMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
// console.log('props', props)
const [openMenu, setOpenMenu] = useState(false);

const openSlidingMenu = () => {
  setOpenMenu(true);
};

const closeSlidingMenu = () => {
  setOpenMenu(false);
};


  return (
    <>
    {openMenu ? ( 
    <section id="nav-container" className="close" >
      <section className="menu-arrow-container">
        <FontAwesomeIcon
        icon="hand-point-right"
        className="menu-arrow" 
        onClick={closeSlidingMenu}/>
      </section>
      <section className="wrapping-nav">
        <NavLink
          exact
          to={`/`}
          className="nav"
          activeClassName="selected"
          activeStyle={{ color: "white", cursor: "pointer" }}
        >
          {" "}
          <FontAwesomeIcon icon="home" className="fa-2x" />{" "}
        </NavLink>
        <NavLink
          exact
          to={`/site-one`}
          className="nav"
          activeClassName="selected"
          activeStyle={{ color: "white", cursor: "pointer" }}
        >
          {" "}
          <FontAwesomeIcon icon="car" className="fa-2x" />{" "}
        </NavLink>
        <NavLink
          exact
          to={`/site-two`}
          className="nav"
          activeClassName="selected"
          activeStyle={{ color: "white", cursor: "pointer" }}
        >
          {" "}
          <FontAwesomeIcon icon="car" className="fa-2x" />{" "}
        </NavLink>
        <NavLink
          exact
          to={`/my-favorites`}
          className="nav"
          activeClassName="selected"
          activeStyle={{ color: "white", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon="heart" className="fa-2x" />{" "}
        </NavLink>
      </section>
    </section>
    ) : (
      <section id="nav-container"
      className="open"
      >
        <section className="menu-arrow-container">
          <FontAwesomeIcon
          icon="hand-point-left"
          className="menu-arrow"
          onClick={openSlidingMenu} />
        </section>
        <section className="wrapping-nav">
          <NavLink
            exact
            to={`/`}
            className="nav"
            activeClassName="selected"
            activeStyle={{ color: "white", cursor: "pointer" }}
          >
            {" "}
            <FontAwesomeIcon icon="home" className="fa-2x" />{" "}
          </NavLink>
          <NavLink
            exact
            to={`/site-one`}
            className="nav"
            activeClassName="selected"
            activeStyle={{ color: "#6845EB", cursor: "pointer" }}
          >
            {" "}
            <FontAwesomeIcon icon="car" className="fa-2x" />{" "}
          </NavLink>
          <NavLink
            exact
            to={`/site-two`}
            className="nav"
            activeClassName="selected"
            activeStyle={{ color: "#2DEBC7", cursor: "pointer" }}
          >
            {" "}
            <FontAwesomeIcon icon="car" className="fa-2x" />{" "}
          </NavLink>
          <NavLink
            exact
            to={`/my-favorites`}
            className="nav"
            activeClassName="selected"
            activeStyle={{ color: "white", cursor: "pointer" }}
          >
            <FontAwesomeIcon icon="bookmark" className="fa-2x" />{" "}
          </NavLink>
        </section>
      </section>
     

    )}
    </>
  );
};

export default Menu;
