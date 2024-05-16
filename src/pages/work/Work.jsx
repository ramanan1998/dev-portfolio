import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}
    >
      Work
    </motion.div>
  )
}

export default Work
