import React, {useState, useEffect} from 'react';
import UseData from '../Hooks/UseData';
import '../../styles/_sort.scss';


const SearchFavorites = () => {

    const [searchInput, setSearchInput] = useState("")
    const { faveState, setFaveState} = UseData('https://jeep-prices-repo-be.herokuapp.com/my-favorites'); 
    console.log(searchInput)


    const handleChange = (e) => {
        console.log('e', e)
        setSearchInput(e.target.value)

        let res = [...faveState].filter(item => item.includes(searchInput))
        setFaveState(res)
        
    }



    // useEffect(() => {
    //     let res = [...faveState].filter(cars => cars.includes(searchInput))
    //     setFaveState(res)
    // }, [searchInput])

 return(
     <div className='search-container'>
     <input
      type='text'
      placeholder='Search Favorite Cars'
      value={searchInput}
      onChange={handleChange}
      className="search-input"
    />
     </div>
 )
}





export default SearchFavorites;