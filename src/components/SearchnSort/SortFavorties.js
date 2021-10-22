import UseData from '../Hooks/UseData';
import React, {useState, useEffect} from 'react';
import useData from '../Hooks/UseData';
import '../../styles/_sort.scss';


const SortFavorites = () => {


    const { faveState, setFaveState} = UseData('https://jeep-prices-repo-be.herokuapp.com/my-favorites'); 
    // console.log('state', faveState)
    const [sortFaves, setSortFaves] = useState([])
    const [sortType, setSortType] = useState('title');


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
            return a.title- b.title
            
        })
        setSortFaves(sortedRes)
        
    }, [sortType])

    // console.log('Sort State', sortFaves)

    return(
        <div className='sort-container'>
            <select name='sort'>
                <option>Sort By Year:</option>
                <option value='low' onChange={selectDropdown}>Least Recent to Most Recent</option>
                <option value='high'>Most Recent to Least Recent</option>
            </select>




            
        </div>
    )


}





export default SortFavorites;