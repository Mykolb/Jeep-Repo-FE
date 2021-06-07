import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UseData from '../Hooks/UseData'
import axios from 'axios';





const FaveButton = (props) => {
console.log('BTN PROPS', props)
// console.log('BTN Vehicle', vehicle)
const { card, data, valid} = props
console.log('CARD', card)
console.log('DaTA', data)

const { faveState, setValidate, successMsg} = UseData(); 


    //look into includes, index of, etc tomorrow
    
    const addFavorite = () => {
    
       
        data.map(( item, i ) => {
            console.log('ITEM', item, 'I', i)
            if(item['_id'] && i == card) {
                axios.post('https://jeep-prices-repo-be.herokuapp.com/my-favorites', item)
                .then(res => {
                    console.log(res)
                    faveState.push(res)
                    setValidate(true)
                })
                .catch(err => console.log(err))
            }

        })
    }

    




    return(
        <>   
        <FontAwesomeIcon icon="heart" className='heart-icon' onClick={() => addFavorite()} />
        {successMsg()}
        </>
    )
 



}









export default FaveButton;