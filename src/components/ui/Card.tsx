import { motion } from "framer-motion";
import type { CardProps } from "../../types/styled/Card";

export const Card = ({ children }: CardProps) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-xl m-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};
