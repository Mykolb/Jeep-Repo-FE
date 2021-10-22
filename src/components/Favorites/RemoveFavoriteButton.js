import UseData from "../Hooks/UseData";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoveFavoriteButton = (props) => {
  const { setFaveState, faveState} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );

  let { faveId } = props;

  const  deleteFavorite = () => {
 
      axios
        .delete(`https://jeep-prices-repo-be.herokuapp.com/my-favorites/${faveId}`)
        .then((res) =>{
            console.log(res)
             let updatedState = [faveState].filter(item => item.faveId !== faveId)
            // console.log("Filtered", updatedState)
            setFaveState(...updatedState)
            setFaveState(res)
              if(res.status === 201) {
                console.log('Successfully deleted!')
                return (<h2 className='test'>Deleted!</h2>)
              }
        })
        .catch((err) => console.log(err));
    }
    
 
  return (
    <>
      <FontAwesomeIcon
        icon="trash-alt"
        className="delete"
        onClick={() => deleteFavorite()}
      >
        Delete
      </FontAwesomeIcon>
    </>
  );
};

export default RemoveFavoriteButton;
