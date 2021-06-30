import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseData from "../Hooks/UseData";
import axios from "axios";
import "../../styles/_favebutton.scss";

const FaveButton = (props) => {
  // console.log('BTN PROPS', props)
  const { card, data} = props;
  // console.log('CARD', card)
  // console.log('DaTA', data)
 

  const { faveState, setValidate, successMsg, isFavorite, setFavorite, isActive, setActive, buttonColor, setButtonColor, validate} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );  


  const addFavorite = () => {
    data.map((item, i) => {
      // console.log('ITEM', item, 'I', i)
      if (item["_id"] && i === card) {
        axios
          .post("https://jeep-prices-repo-be.herokuapp.com/my-favorites", item)
          .then((res) => {
            console.log(res);
            faveState.push(res);
            setValidate(true);
            setActive(true)
            // setButtonColor('red')
          })
          .catch((err) => console.log(err));
      }
    });
  };

if(isActive === true) {
  
} 

  return (
    <>
      <FontAwesomeIcon
        icon="heart"
        className={`save ${isActive ? 'active' : 'not-active'}`}
        onClick={() => addFavorite()}
      />
      {successMsg()}
    </>
  );
};

export default FaveButton;
