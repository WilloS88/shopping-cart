import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../state/search/searchSlice";
import type { SearchButtonProps } from "../../types/header/SearchButton";

export const SearchButton = ({ isMobile }: SearchButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch(setSearchQuery(e.target.value)); 
    navigate("/products"); 
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget) && !searchTerm) {
      setIsExpanded(false); // Close search bar when focus is lost
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onBlur={handleBlur}
      tabIndex={-1} // Allows div to receive focus
    >
      <motion.button
        onClick={handleSearchExpand}
        className="bg-transparent border-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SearchIcon className="h-[25px] w-auto" />
      </motion.button>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isExpanded ? "250px": "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`absolute ${isMobile ? "left-0 right-0 mx-auto" : "right-0"} bg-white border rounded shadow ${
          isExpanded ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 w-full focus:outline-none"
          placeholder="Search products..."
          autoFocus
        />
        <button
          onClick={handleSearchExpand}
          className="absolute top-0 right-0 mt-2 mr-2 bg-transparent border-none"
        >
          <X />
        </button>
      </motion.div>
    </div>
  );
};
