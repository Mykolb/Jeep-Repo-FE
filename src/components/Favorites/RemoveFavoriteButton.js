import UseData from "../Hooks/UseData";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoveFavoriteButton = (props) => {
  const { setFaveState, faveState, setLoading} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );

  let { faveId } = props;
  // console.log("ID", faveId);
    console.log('State upon refresh', faveState)

//i might be re-freshing the button and not the favorite list like I initially thought hmmm....
  const  deleteFavorite = () => {
 
      console.log('Del ID', faveId)
      axios
        .delete(`https://jeep-prices-repo-be.herokuapp.com/my-favorites/${faveId}`)
        .then((res) =>{
            console.log(res)
            // if(res) {
              setFaveState({faveState: [...faveState].filter(item => item.faveId !== faveId)})
            // }
        })
        .catch((err) => console.log(err));
    }


    // console.log('fave state', faveState)

            
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
