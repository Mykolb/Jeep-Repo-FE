import useData from '../Hooks/UseData';
// import useFaves from '../Hooks/useFaves';
import Spinner from '../Spinner';


const FavoritesList = () => {


    const {isLoading, faveState} = useData('https://jeep-prices-repo-be.herokuapp.com/my-favorites');
 

    console.log('fave state in favorites', faveState)

  if(faveState <= 0) {
      return <h2>There are no favorites saved in the database. ;-( </h2>
  }


    return(
        <>
        {!isLoading ? (
            <>
        {faveState.map((data, i) => {
            return(
                <div key={i}>
                    <p>{data.title}</p>
                    <p>{data.deetz}</p>
                    <p><img src={data.img} alt='dummy-img'></img></p>
                    <p>{data.price}</p>
                </div>
            )
        })}
            </>
 )        : (< Spinner />) }
        </>
    )
}




export default FavoritesList;