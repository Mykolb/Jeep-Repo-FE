import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



//created custom hook to pass state + load spinner + reuseable functions to make a card carousel
const useData = (myUrl) => {
  const [siteState, setSiteState] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isFavorite, setFavorite] = useState(false);
  const [faveState, setFaveState] = useState([]);
  const [validate, setValidate] = useState(false);
  const [isActive, setActive] = useState(false)



  //functions for selecting prev or next card
  //reset once it hits ends of []
  const nextCard = () => {
    setCurrentCard(currentCard === siteState.length - 1 ? 0 : currentCard + 1);
  };

  const prevCard = () => {
    //if current card is greater than 0 subtract + go back one, else it stays at 0
    setCurrentCard(currentCard === 0 ? siteState.length - 1 : currentCard - 1);
  };

  
  //get all site data
  //added useEffect cleanup to prevent update of state on unmounted component 
  useEffect(() => {
    let componentMounted = false;
    axios
      .get(myUrl)
      .then((res) => {
        if(!componentMounted) {
          setLoading(false);
          setSiteState(res.data);
        }
      })        
      return () => {
        componentMounted = true;
      }
      // .catch((err) => console.log(err));
  }, [myUrl]);

  //get all favorites data
  //adding faveState in dependency url causes the request to re-render too many times
  useEffect(() => {
    let componentMounted = false;
    axios
      .get(myUrl)
      .then((res) => {
        if(!componentMounted) {
          setLoading(false);
          setFaveState(res.data);
        }
      })
      return () => {
        componentMounted = true;
      }
      
      // .catch((err) => console.log(err));
  }, [myUrl]);

  const successMsg = () => {
    if (validate === true && !isFavorite) {
        return(
          <h4 className="fave-success-msg">{" "} 
          Successfully added to Favorites!{" "} 
          <FontAwesomeIcon icon="check-circle"/>{" "}
          </h4>
        )
}}


  

  return {
    siteState,
    setSiteState,
    setCurrentCard,
    currentCard,
    nextCard,
    prevCard,
    isLoading,
    isFavorite,
    setFavorite,
    faveState,
    setFaveState,
    validate,
    setValidate,
    successMsg,
    isActive, 
    setActive
  };
};

export default useData;
