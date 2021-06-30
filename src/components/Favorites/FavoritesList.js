import useData from "../Hooks/UseData";
import React, { useState } from "react";
import Spinner from "../Spinner";
import RemoveFavoriteButton from "./RemoveFavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/_favoriteslist.scss";
import SearchnSortContainer from "../SearchnSort/SearchnSortContainer";

const FavoritesList = (props) => {
  const { isLoading, faveState} = useData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );
  const [showMore, setShowMore] = useState(false);



  //toggle info in favorites, need to make the toggle work for each card at a time
  const showText = () => {
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  if (faveState <= 0) {
    return (
      <h2>
        There are no favorites saved. <FontAwesomeIcon icon="meh" />{" "}
      </h2>
    );
  }

  return (
    <>
      <SearchnSortContainer />
      <>
        {!isLoading ? (
          <div className="favorite-container">
            {faveState.map((data, i) => {
              
              return (
                <div key={i} className="fave-list">
                  <RemoveFavoriteButton data={faveState} faveId={data._id} />
                  <p>{data.title}</p>
                  <h3 onClick={showText}>Read More</h3>
                  <>
                    {showMore === true &&  (
                      <>
                        <p>{data.deetz}</p>
                        <p>{data.price}</p>
                      </>
                    )}
                  </>
                  <p>
                    <img
                      src={data.img}
                      alt="fave-img"
                      className="fave-img"
                    ></img>
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <Spinner />
        )}
      </>
    </>
  );
};

export default FavoritesList;
