import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { setSearchQuery } from "../../state/search/searchSlice"; // Make sure this path is correct
import SearchIcon from "../../assets/svg/search-icon.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const ExpandableSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const handleExpand = () => setIsExpanded(true);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    dispatch(setSearchQuery("")); 
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="relative mt-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={handleExpand}
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "hidden" : "block"
          }`}
        >
          <img className="h-[25px] w-auto" src={SearchIcon} alt="Search" />
        </button>
      </div>
      {isExpanded && (
        <div className="flex justify-center items-center gap-3">
          <img className="h-[25px] w-auto" src={SearchIcon} alt="Search" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            autoFocus
          />
          <button
            type="button"
            onClick={handleCollapse}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </form>
  );
};
