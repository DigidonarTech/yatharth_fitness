import { motion } from "framer-motion";

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      type={type}
      onClick={onClick}
      className={`
        px-7 py-3
        rounded-xl
        font-semibold
        text-white
        bg-primaryGradient
        shadow-primary
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;