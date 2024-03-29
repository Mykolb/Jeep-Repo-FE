import "../../styles/_siteone.scss";
//importing arrow icons
import useData from "../Hooks/UseData";
import Spinner from "../Spinner";
import FaveButton from "../Favorites/FaveButton";

const SiteOne = () => {
  const { siteState, currentCard, nextCard, prevCard, isLoading } = useData(
    "https://jeep-prices-repo-be.herokuapp.com/siteOne"
  );

  return (
    <>
      {!isLoading ? (
        <>
          {siteState.map((data, i) => {
            return (
              <>
                {currentCard === i && (
                  <div
                    className="site-container-one"
                    key={data}
                    value={currentCard}
                  >
                    <h3 className="prev" onClick={prevCard}>
                      Previous Page
                    </h3>
                    <h3>
                      {" "}
                      Save to Faves
                      <FaveButton card={currentCard} data={siteState} />
                    </h3>
                    <h3 className="next" onClick={nextCard}>
                      Next Page
                    </h3>
                    {/* price is one row centered*/}
                    <div className="price-container">
                      <h3>Price</h3>
                      <p>{data.price} </p>
                    </div>
                    {/* both divs are in one row, two columns */}
                    <div className="details-container">
                      <h3>Details</h3>
                      <p className="title">
                        <strong>Title:</strong> {data.title}
                      </p>
                      <p>
                        <strong>Vehicle Information:</strong>
                        {"\n"} {data.deetz}
                      </p>
                    </div>

                    <div className="vehicleImg-container">
                        <img src={data.img} alt="jeep img"></img>
                    </div>
                    <div className="page-num">
                      <h3>Card: {currentCard}/{siteState.length} </h3>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SiteOne;
