import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../lib/variants/variants";

function Home() {
  return (
    <motion.div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-2 flex flex-col xl:flex-row justify-start items-center">
      <div className="text-center w-full px-20 md:w-1/2">
        <div>
          <motion.h1 
            className="h1"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming Ideas <br /> into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            className="mt-5"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus itaque dicta vel magni? Laudantium quaerat, animi, sint blanditiis asperiores, sequi molestiae explicabo modi ullam non debitis magni minima ex.
          </motion.p>
          <motion.div 
            className="mt-5"
            variants={fadeIn("down", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* <div className="bg-explosion bg-right bg-cover bg-no-repeat h-full w-1/2 relative z-10">img</div> */}
    </motion.div>
  )
}

export default Home
