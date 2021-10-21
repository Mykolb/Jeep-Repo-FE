import Loader from "react-loader-spinner";
import "../styles/_spinner.scss";

const Spinner = () => {
  return (
    <div className="site-container">
      <Loader
        type="MutatingDots"
        color="#2DEBC7"
        secondaryColor="#6845EB"	
        height={350}
        width={350}
        className="loader"
      />
    </div>
  );
};

export default Spinner;
