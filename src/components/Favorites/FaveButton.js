import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UseData from '../Hooks/UseData'
import axios from 'axios';





const FaveButton = (props) => {
console.log('BTN PROPS', props)
// console.log('BTN Vehicle', vehicle)
const { card, data} = props
console.log('CARD', card)
console.log('DaTA', data)

    const {faveState, setFaveState, siteState, currentCard, setCurrentCard} = UseData(); 

    //look into includes, index of, etc tomorrow
    
    const addFavorite = () => {
    
       
        data.map(( item, i ) => {
            console.log('ITEM', item, 'I', i)
            if(item['_id'] && i == card) {
                axios.post('https://jeep-prices-repo-be.herokuapp.com/my-favorites', item)
                .then(res => {
                    console.log(res)
                    faveState.push(res)
                })
                .catch(err => console.log(err))
            }

        })


    }



    return(
        <>
        <FontAwesomeIcon icon="heart" className='heart-icon' onClick={() => addFavorite(faveState)}  />
        </>
    )
 



}









export default FaveButton;