import { Redirect } from 'react-router';
import useData from '../Hooks/UseData';
// import useFaves from '../Hooks/useFaves';
import Spinner from '../Spinner';
import RemoveFavoriteButton from './RemoveFavoriteButton';
import '../../styles/_favoriteslist.scss';


const FavoritesList = () => {


    const {isLoading, faveState, currentCard} = useData('https://jeep-prices-repo-be.herokuapp.com/my-favorites');
 

  if(faveState <= 0) {
      return <h2>There are no favorites saved in the database. ;-( </h2>
  }


    return(
        <>
        {!isLoading ? (
            <>
        {faveState.map((data, i) => {
            return(
                <div key={i} className='fave-list'>
                    {/* <section className='fave-item'> */}
                    <RemoveFavoriteButton card={currentCard} data={faveState} />
                    {}
                    <p>{data.title}</p>
                    <p>{data.deetz}</p>
                    <p><img src={data.img} alt='fave-img' className='fave-img'></img></p>
                    <p>{data.price}</p>
                    {/* </section> */}
                </div>
            )
        })}
            </>
 )        : (< Spinner />) }
        </>
    )
}




export default FavoritesList;