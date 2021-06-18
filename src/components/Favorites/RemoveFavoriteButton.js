import React, {useState, useEffect} from 'react';
import UseData from '../Hooks/UseData'
import axios from 'axios';



const RemoveFavoriteButton = (props) => {

    const { faveState, setFaveState } = UseData('https://jeep-prices-repo-be.herokuapp.com/my-favorites'); 

   
    let { id} = props

//    console.log('ID', id)
    
    //want to update the state so it refreshes on it's own... 
const deleteFavorite = () => {

    if(id) {
        axios.delete(`https://jeep-prices-repo-be.herokuapp.com/my-favorites/${id}`)
        .then(res => {
            console.log(res)
            setFaveState(...faveState)
        })
        .catch(err => console.log(err))
    }
 }

    return(
        <>
        <button onClick={() => deleteFavorite()}>Delete</button>
        </>
    )
}






export default RemoveFavoriteButton;