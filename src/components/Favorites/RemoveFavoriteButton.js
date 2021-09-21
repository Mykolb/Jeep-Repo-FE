import UseData from "../Hooks/UseData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoveFavoriteButton = (props) => {
  const { setFaveState, faveState} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );

  let { faveId } = props;
  // console.log("ID", faveId);
    // console.log('State upon refresh', faveState)

//i might be re-freshing the button and not the favorite list like I initially thought hmmm....
  const  deleteFavorite = () => {
 
      // console.log('Del ID', faveId)
      axios
        .delete(`https://jeep-prices-repo-be.herokuapp.com/my-favorites/${faveId}`)
        .then((res) =>{
            console.log(res)
            let updatedState = [...faveState].filter(item => item.faveId !== faveId)
            console.log('FaveId', faveId)
            console.log("Filtered", updatedState)
            setFaveState({ faveState: updatedState})

              // setFaveState({faveState: [...faveState].filter(item => item.faveId !== faveId)})
              if(res.status === 201) {
                console.log('Successfully deleted!')
                return <h2 className='test'>Deleted!</h2>
              }

        })
        .catch((err) => console.log(err));
    }
  // console.log(faveState)
    // console.log('fave state', faveState)
 
            
  return (
    <>
      <FontAwesomeIcon
        icon="trash-alt"
        className="delete"
        onClick={() => deleteFavorite()}
      >
        Delete
      </FontAwesomeIcon>
    </>
  );
};

export default RemoveFavoriteButton;
