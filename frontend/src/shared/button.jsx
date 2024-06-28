import { Button as ChakraButton, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = chakra(motion.button);

const myVariants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1.1 }
};

const AnimatedButton = ({ onClick, ...props }) => {
  return (
    <MotionButton
      {...props}
      initial="hidden"
      whileHover="visible"
      variants={myVariants}
      transition={{ ease: "ease-out", duration: 0.3 }}
      onClick={onClick}
    >
      {props.children}
    </MotionButton>
  );
};

export default AnimatedButton;
