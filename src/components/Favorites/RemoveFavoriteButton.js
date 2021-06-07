import React, {useState, useEffect} from 'react';
import UseData from '../Hooks/UseData'
import axios from 'axios';
import { Redirect } from 'react-router';


const RemoveFavoriteButton = (props) => {


    console.log('REMOVE BTN', props)
    const { data, card } = props
    console.log('FAV STATE', data)

    const { faveState, setFaveState } = UseData(); 

const deleteFavorite = () => {

console.log('delete functionality coming at ya!')
    
}





    return(
        <>
        <button onClick={() => deleteFavorite()}>Delete</button>
        </>
    )
}






export default RemoveFavoriteButton;