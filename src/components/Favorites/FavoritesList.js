import useData from '../Hooks/UseData';
import React, {useState} from 'react';
import Spinner from '../Spinner';
import RemoveFavoriteButton from './RemoveFavoriteButton';
import '../../styles/_favoriteslist.scss';
import SortFavorites from './SortFavorties';

const FavoritesList = () => {



    const {isLoading, faveState, setFaveState} = useData('https://jeep-prices-repo-be.herokuapp.com/my-favorites');
    const [showMore, setShowMore] = useState(false)

    const showText = () => {
        if (showMore === false) {
            setShowMore(true)
        } else {
            setShowMore(false)
        }
    }

  if(faveState <= 0) {
      return <h2>There are no favorites saved in the database. ;-( </h2>
  }


    return(
        <>
        {!isLoading ? (
            
            <div className='favorite-container'>
                <SortFavorites />
        {faveState.map((data, i) => {
            return(
                <div key={i} className='fave-list'>
                    <RemoveFavoriteButton  data={faveState} id={data._id} className='delete-favorite'/>
                    <p>{data.title}</p>
                    <h3 onClick={showText}>Show More </h3>
                    <>
                    {showMore === true && 
                    <>
                    <p>{data.deetz}</p>
                    <p>{data.price}</p>
                    </>
                    }
                    </>
                    <p><img src={data.img} alt='fave-img' className='fave-img'></img></p>
                </div>
            )
        })}
            </div>
 )        : (< Spinner />) }
        </>
    )
}




export default FavoritesList;