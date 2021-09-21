import { NavLink } from "react-router-dom";
import "../../styles/_menu.scss";

const OpenMenu = () => {
  return (
    <section className="nav-container">
      <NavLink
        to={`/`}
        className="nav"
        activeClassName="selected"
        activeStyle={{ color: "white", cursor: "pointer" }}
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to={`/site-one`}
        className="nav"
        activeClassName="selected"
        activeStyle={{ color: "white", cursor: "pointer" }}
      >
        {" "}
        Site One
      </NavLink>
      <NavLink
        to={`/site-two`}
        className="nav"
        activeClassName="selected"
        activeStyle={{ color: "white", cursor: "pointer" }}
      >
        {" "}
        Site Two
      </NavLink>
      <NavLink
        to={`/my-favorites`}
        className="nav"
        activeClassName="selected"
        activeStyle={{ color: "white", cursor: "pointer" }}
      >
        Favorites
      </NavLink>
    </section>
  );
};

export default OpenMenu;
