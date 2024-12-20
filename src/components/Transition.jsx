import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "0%",
    width: "0%"
  },
  animate: {
    x: [ "0%", "100%", "100%", "0%" ],
    width: [ "0%", "100%", "100%", "0%" ],
  },
  // exit: {
  //   x: [ "0%", "100%" ],
  //   width: [ "0%", "100%" ]
  // }

}

function Transition({ children }) {
  
  return (
    <>
    <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-40 bg-[#2e2257]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.1,
        duration: 1,
        ease: "easeInOut"
      }}
    ></motion.div>
    <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#3b2d71]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeInOut"
      }}
    ></motion.div>
    <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#4b3792]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut"
      }}
    ></motion.div>
    {children}
    </>
  )
}

export default Transition
