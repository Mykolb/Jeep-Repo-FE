import UseData from '../Hooks/UseData';
import React, {useState, useEffect} from 'react';
import useData from '../Hooks/UseData';
import '../../styles/_sort.scss';


const SortFavorites = () => {


    const { faveState, setFaveState} = UseData(); 



    const sortLowToHigh = () => {
        const sorted = [...faveState].sort((a, b) => {
            console.log(a.price - b.price)
        })
        setFaveState(sorted)
    }





    return(
        <div className='sort-container'>
            <select name='sort'>
                <option>Sort:</option>
                <option value='low' onClick={sortLowToHigh}>Low to High</option>
                <option value='high'>High to Low</option>
            </select>
        </div>
    )


}





export default SortFavorites;