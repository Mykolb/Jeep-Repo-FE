import UseData from '../Hooks/UseData';
import React, {useState, useEffect} from 'react';
import useData from '../Hooks/UseData';
import '../../styles/_sort.scss';


const SortFavorites = () => {


    const { faveState, setFaveState} = UseData('https://jeep-prices-repo-be.herokuapp.com/my-favorites'); 
    // console.log('state', faveState)
    const [sortFaves, setSortFaves] = useState([])
    const [sortType, setSortType] = useState('price');


    const selectDropdown = e => {
        setSortType(e.target.value);
        // console.log("e", e.target.value);
      };    
     
    // const sortLowToHigh = () => {
    //     const sorted = [...faveState].sort((a, b) => {
    //         // console.log('SORt', sorted)
    //         return a.price - b.price
    //     })
       
    //     setSortFaves(sorted)
    // }
    // console.log('sortFaves', sortFaves)


    useEffect(() => {
        const sortedRes = [...faveState].sort((a, b) => {
            return a.price - b.price
        })
       
        setSortFaves(sortedRes)
    }, [])

    // console.log('Sort State', sortFaves)

    return(
        <div className='sort-container'>
            <select name='sort'>
                <option>Sort:</option>
                <option value='low' onChange={selectDropdown}>Low to High</option>
                <option value='high'>High to Low</option>
            </select>
        </div>
    )


}





export default SortFavorites;