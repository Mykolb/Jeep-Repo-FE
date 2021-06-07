import React, {useState, useEffect} from 'react';
import UseData from '../Hooks/UseData'
import axios from 'axios';



const RemoveFavoriteButton = (props) => {


    console.log('REMOVE BTN', props)
    const { data } = props
    console.log('FAV STATE', data)

    const { faveState, setFaveState } = UseData(); 

const deleteFavorite = () => {


   
    
    
    
}





    return(
        <>
        <button onClick={() => deleteFavorite()}>Delete</button>
        </>
    )
}






export default RemoveFavoriteButton;