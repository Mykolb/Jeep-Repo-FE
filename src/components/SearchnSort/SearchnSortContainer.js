import SearchFavorites from "./SearchFavorites";
import SortFavorites from "./SortFavorties";
import "../../styles/_sort.scss";

const SearchnSortContainer = () => {
    return(
        <section className= 'search-sort-container'>
            <SortFavorites />
            <SearchFavorites />
        </section>
    )

}



export default SearchnSortContainer;