import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShoppingCartIcon from "../../../assets/svg/shopping-cart-icon.svg";

export const CartButton = ({ totalQuantity }: { totalQuantity: number }) => (
  <Link to="/cart" className="relative">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="items-center flex"
    >
      <img className="h-[25px] w-auto " src={ShoppingCartIcon} alt="Cart" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-center rounded-full px-1.5 py-0.5 text-xs font-bold">
          {totalQuantity}
        </span>
      )}
    </motion.button>
  </Link>
);
