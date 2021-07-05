import SearchFavorites from "./SearchBar";
import SortFavorites from "./SortFavorties";
import "../../styles/_sort.scss";

const SearchnSortContainer = (props) => {

    return(
        <section className= 'search-sort-container'>
            <SortFavorites  />
            {/* <SearchFavorites /> */}
        </section>
    )

}



export default SearchnSortContainer;