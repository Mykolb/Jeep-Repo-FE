import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseData from "../Hooks/UseData";
import axios from "axios";
import "../../styles/_favebutton.scss";

const FaveButton = (props) => {
  const { card, data} = props;
  // console.log('CARD', card)
  // console.log('DaTA', data)
 

  const { setFaveState,  setValidate, successMsg, isActive, setActive} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );  


  const addFavorite = () => {
    data.forEach((item, i) => {
      // console.log('ITEM', item, 'I', i)
      if (item["_id"] && i === card) {
        axios
          .post("https://jeep-prices-repo-be.herokuapp.com/my-favorites", item)
          .then((res) => {
            setFaveState(res)
            // faveState.push(res);
            setValidate(true);
            setActive(true)
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <FontAwesomeIcon
        icon="bookmark"
        className={`save ${isActive ? 'active' : 'not-active'}`}
        onClick={() => addFavorite()}
      />
      {successMsg()}
    </>
  );
};

export default FaveButton;
