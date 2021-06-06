import '../styles/_siteone.scss';
//importing arrow icons
import useData from './Hooks/UseData';
// import useFaves from './Hooks/useFaves';
import Spinner from './Spinner';
import { Route, NavLink, Link, Redirect} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FaveButton from './Favorites/FaveButton';






const SiteOne = (props) => {

    console.log('PROPS', props)
    

    const {siteState, currentCard, nextCard, prevCard, isLoading} = useData('https://jeep-prices-repo-be.herokuapp.com/siteOne'); 
 



  
    return(
        <>
        {!isLoading ? (
        <>
        {siteState.map((data, i) => {
            return( 
                <> 
                {currentCard === i &&
                <div className='site-container-one' key={i} value={currentCard}>
                <h3 className='prev' onClick={prevCard}>Previous Page</h3>
                <h3 className='next' onClick={nextCard}>Next Page</h3>
                <FaveButton card={currentCard} data={siteState} />
                {/* <h2>Site One Name Here</h2> */}
                {/* price is one row centered*/}
                <div className='price-container'>
                <h3>Price</h3>
                <hr></hr>
                <p>{data.price} </p>
                </div>
                {/* both divs are in one row, two columns */}
                <div className='details-container'>
                <h3>Details</h3>
                <hr></hr>
                <p className='title'><strong>Title:</strong> {data.title}</p>
                <p><strong>Vehicle Information:</strong>{"\n"} {data.deetz}</p>
                </div>
 
                <div className='vehicleImg-container'>
                <h3>Vehicle Image</h3>
                <hr></hr>
                <a href={data.img}><img src={data.img} alt='jeep img'></img></a>
                </div>
                <div className='page-num'>
                {/* <h3>Card: {currentCard + 1} </h3> */}
                </div>
                </div>  
        }  
                </>
            )
    
        })}
        </>
        )  : (< Spinner />) }
        </>
    
    )
  
}


export default SiteOne;