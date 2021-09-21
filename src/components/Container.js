// import completed components into this file
import "../styles/_container.scss";
import SiteOne from "./Sites/SiteOne";
import SiteTwo from "./Sites/SiteTwo";
import FavoritesList from "./Favorites/FavoritesList";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import { Route } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <Menu />
      
      {/* <h1>Please Select a Site</h1> */}
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/site-one`} component={SiteOne} />
      <Route exact path={`/site-two`} component={SiteTwo} />
      <Route exact path={`/my-favorites`} component={FavoritesList} />
    </div>
  );
};

export default Container;
