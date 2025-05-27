import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants/variants";
import { Icons } from "../../assets/Icons";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <motion.div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-5 lg:px-20 flex flex-col xl:flex-row justify-start items-center">
      <div className="text-center w-full mt-20 lg:mt-1">
        <div>
          <motion.h1 
            className="h1"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let's Connect
            
          </motion.h1>
          <motion.p
            className="mt-5 px-[10%]"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            If you want to get in touch with me about something or just to say hi, reach out on social media
          </motion.p>

          <div className="flex flex-row items-center justify-center gap-10">
            <motion.a
              href="https://github.com/ramanan1998"
              target="_blank"
              className="mt-10"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Icons.githubIcon/>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/weird_since_1998/"
              target="_blank"
              className="mt-10"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Icons.instagramIcon/>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ramananr2698095/"
              target="_blank"
              className="mt-10"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Icons.linkedinIcon/>
            </motion.a>
            
          </div>

          <motion.p
            className="mt-5 px-[10%]"
            variants={fadeIn("down", 1.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            or send me an email
          </motion.p>

          
            <motion.p
              className="mt-5 text-white hover:text-accent w-fit mx-auto"
              variants={fadeIn("down", 1.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <a href="mailto:ramananr2698095@gmail.com">ramananr2698095@gmail.com</a>
            </motion.p>
          

          <motion.p
            className="mt-5 px-[10%]"
            variants={fadeIn("down", 1.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            or call me.
          </motion.p>

          <motion.p
            className="mt-5 text-white hover:text-accent w-fit mx-auto"
            variants={fadeIn("down", 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <a href="tel:+919944331633">+91 9944331633</a>
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
