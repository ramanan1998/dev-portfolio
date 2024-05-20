import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";

function Home() {
  return (
    <motion.div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-2 flex flex-col justify-center items-center">
      <div className="text-center">
        <div>
          <h1 className="h1">Transforming Ideas <br /> into <span className="text-accent">Digital Reality</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus itaque dicta vel magni? Laudantium quaerat, animi, sint blanditiis asperiores, sequi molestiae explicabo modi ullam non debitis magni minima ex.</p>
          <div className="mt-5">
            <ProjectsBtn/>
          </div>
        </div>
      </div>
      {/* <div>image</div> */}
    </motion.div>
  )
}

export default Home
