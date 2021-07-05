import useData from "../Hooks/UseData";
import React, { useState, useEffect } from "react";
import RemoveFavoriteButton from "./RemoveFavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/_favoriteslist.scss";



const FavoritesList = () => {
  const { isLoading, faveState, setFaveState } = useData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );
  const [filteredFaves, setFilteredFaves] = useState([]);
  const [searchInput, setSearchInput] = useState("");


//keeping track of the searchBar input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // console.log("e", e.target.value);
  };

//copy the fave arr and filter it to only return cars that match the handleChange for vehicle description or title + set the fiter results to new arr state
  useEffect(() => {
    let filteredRes = [...faveState].filter((car) => {
      return (
        car["deetz"].toLowerCase().includes(searchInput.toLowerCase()) ||
        car["title"].toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredFaves(filteredRes);
  }, [searchInput]);

  if (faveState <= 0) {
    return (
      <h2>
        There are no favorites saved. <FontAwesomeIcon icon="meh" />{" "}
      </h2>
    )
  }

  //need to add validation when no search item matches

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Favorite Cars"
          value={searchInput}
          onChange={handleChange}
          className="search-input"
        />
      </div>
      <>
        {!searchInput ? (
          <div className="favorite-container">
            {faveState.map((data, i) => {
              return (
                <div key={i} className="fave-list">
                  <RemoveFavoriteButton data={faveState} faveId={data._id} />
                  <p>{data.title}</p>
                  <p>{data.deetz}</p>
                  <p>{data.price}</p>
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
          <div className="favorite-container">
            {filteredFaves.map((data, i) => {
              return (
                <div key={i} className="fave-list">
                  <RemoveFavoriteButton />
                  <p>{data.title}</p>
                  <p>{data.deetz}</p>
                  <p>{data.price}</p>
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
        )}
      </>
    </>
  );
};

export default FavoritesList;
