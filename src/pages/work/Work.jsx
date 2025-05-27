import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";

function Work() {
  return (
    <motion.div className="w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-5 lg:px-[20%] pt-2 lg:pt-[5%] pb-20">
      <div className="text-left w-full mt-20 lg:mt-1">
        <div>
          <motion.h1 
            className="h1"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Work & Experience
            
          </motion.h1>
          <a target="_blank" href="https://blackwinstech.com/">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Blackwins Tech Solutions LLP, Trichy, India 
            </motion.p>
          </a>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Oct 2022 - Current
          </motion.p>

          <ul className="list-disc pl-5">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Designed and developed fully-featured web applications using React, TypeScript, Node.js, and Express.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Implemented authentication and authorization using JWT, and role-based access control (RBAC) for secure
                user management.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Handled Interactivity and responsiveness for Websites and Web Applications using tailwind CSS and Framer
                motion.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Managed databases efficiently with MongoDB/PostgreSQL and optimizing queries.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Successfully integrating RESTful APIs and JSONs into the frontend with proper error handling techniques
                and enabling seamless data exchange between server and client.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Maintained and documented key aspects of the codebase such as folder structure, Type checking, Utility
                functions, Role based authentication and payment gateway related features.
              </p>
            </motion.li>
          </ul>
        </div>
        <motion.hr 
          className="mt-5 border-slate-500" 
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        />
        <div>
          <motion.p
            className="mt-5 text-xl font-medium text-white"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            ScanRev India Pvt Ltd, Bengaluru, India
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Quality Assurance Analyst
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Mar 2021 - Dec 2021
          </motion.p>

          <ul className="list-disc pl-5">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Developed and Maintained test plans and test cases for the web product
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Conducted regular software tests and analyzing functionalities and defects of the software.
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>
                Written documentation, defect reports and make recommendations for repairing the defects
              </p>
            </motion.li>
          </ul>
        </div>
        <motion.hr 
          className="mt-5 border-slate-500" 
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        />
        <div>
          <motion.h1 
            className="h1 mt-5"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Education
            
          </motion.h1>
          <motion.p
            className="text-xl font-medium text-white"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Bachelor of Technology (Mechanical Engineering)
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            CGPA: 7.4
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Aug 2016 - Sept 2020
          </motion.p>
          <motion.p
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Sri Manakula Vinayagar Englineering College, Madagadipet, Pondicherry
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
