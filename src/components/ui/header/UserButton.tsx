import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)}>
      {/* User Icon Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center"
      >
        <UserRound className="h-[25px] w-auto" />
      </motion.button>

      {/* Dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 mt-2 w-28 bg-white border shadow-lg rounded-lg overflow-hidden z-50"
        >
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-gray-100 text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 hover:bg-gray-100 text-center"
          >
            Sign Up
          </Link>
        </motion.div>
      )}
    </div>
  );
};
