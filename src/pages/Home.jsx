import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../lib/variants/variants";
import { GradualSpacing } from "../components/GradualSpacing";

function Home() {
  return (
    <motion.div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-2 flex flex-col xl:flex-row justify-start items-center">
      <div className="text-center w-full px-20">
        <div>
          <motion.h1 
            className="h1"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I am Ramanan <br /> a <GradualSpacing/>
            
          </motion.h1>
          <motion.p
            className="mt-5 px-[10%]"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I love both building and breaking things. I am motivated by challenging projects that involve self-guided research and dynamic problem-solving. My true passion lies in crafting creative frontends and high-performance backend systems.
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
    </motion.div>
  )
}

export default Home
