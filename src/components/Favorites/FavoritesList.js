import useData from "../Hooks/UseData";
import React, { useState, useEffect } from "react";
import RemoveFavoriteButton from "./RemoveFavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/_favoriteslist.scss";
import SortFavorites from "../SearchnSort/SortFavorties";


const FavoritesList = () => {
  const { faveState} = useData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );
  const [filteredFaves, setFilteredFaves] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showText, setShowText] = useState(false);
  const [btnTxt, setBtnTxt] = useState('Read More')
  

  
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
  }, [searchInput, faveState]);
//status msg when there are no favorites saved or detected
  if (faveState <= 0) {
    return (
      <h2>
        There are no favorites saved. <FontAwesomeIcon icon="meh" />{" "}
      </h2>
    )
  }

  const noSearchResults = () => {
    if(searchInput && filteredFaves <= 0) {
      return (
        <h2> No cars were found matching that search term. Please try again.</h2>
        
      )
  }
  }
  
//collaspible content for favorites cards
  const readMore = () => {
      if (showText === false) {
    setShowText(true)
    setBtnTxt('Read Less')
    
 } else {
    setShowText(false)
    setBtnTxt('Read More')
 }
}


  return (
    <>
      <div className="search-container">
        <SortFavorites 

        />
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
                <div test={i} className="fave-list" >
                  <RemoveFavoriteButton data={faveState} faveId={data._id} />
                  <p>{data.title}</p>
                  <h3 onClick={readMore} 
                  > {btnTxt}
                  {showText === true &&
                  <>
                  <p>{data.deetz}</p>
                  <p>{data.price}</p>
                  </>
                  }
                  </h3>
                 
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
            {noSearchResults()}
            {filteredFaves.map((data, i) => {
              return (
                <div key={i} className="fave-list">
                  <RemoveFavoriteButton />
                  <p>{data.title}</p>
                  <h3 onClick={readMore}> Read More
                  {showText === true && 
                  <>
                  <p>{data.deetz}</p>
                  <p>{data.price}</p>
                  </>
                  }
                  </h3>
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
