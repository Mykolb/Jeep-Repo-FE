import Loader from "react-loader-spinner";
import "../styles/_spinner.scss";

const Spinner = () => {
  return (
    <div className="site-container">
      <Loader
        type="MutatingDots"
        color="#2DEBC7"
        secondaryColor="#6845EB"	
        className="loader"
      />
    </div>
  );
};

export default Spinner;
