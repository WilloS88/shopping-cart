import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { AnimatePresence, motion } from "framer-motion";
import { MobileMenu } from "../header/MobileMenu";
import type { SidebarProps } from "../../../types/hamburger/Sidebar";

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed top-0 right-0 z-40 h-full w-72 bg-slate-200 rounded"
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: "spring", bounce: 0.25 }}
        >
          <nav className="flex flex-col items-end justify-center h-full p-10">
            <MobileMenu
              isOpen={isOpen}
              onClose={onClose}
              totalQuantity={totalQuantity}
            />
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
