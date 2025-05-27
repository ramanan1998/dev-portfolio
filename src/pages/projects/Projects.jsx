import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";


function Projects() {
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
            Projects
          </motion.h1>
          <a target="_blank" href="https://blackwinstech.com/">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Blackwins Tech - Company's Official Website 
            </motion.p>
          </a>

          <motion.p
            className="mt-3"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Developed an animated and engaging company website to improve brand presence and user engagement.
          </motion.p>

          <ul className="list-disc pl-5 mt-2">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Built with React, TypeScript, Tailwind CSS, Hero UI, and Framer Motion</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Integrated a multi-step job application form with real-time validation</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Developed Express + MongoDB backend for applicant tracking and data storage</p>
            </motion.li>
          </ul>

          <motion.p
            className="mt-2 text-md font-medium text-white"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Tech Stack: React, TypeScript, Tailwind CSS, Redux, Framer Motion, Express.js, Mongo DB 
          </motion.p>
        </div>
        {/* <hr className="mt-5 border-slate-500" />
        <div>
          <a target="_blank" href="https://blackwinstech.com/">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Airlines Ticket Booking App
            </motion.p>
          </a>

          <motion.p
            className="mt-3"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Developed a mobile airline ticketing app and admin panel.
          </motion.p>

          <ul className="list-disc pl-5 mt-2">
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Built with React Native and Firebase Cloud Functions
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Integrated Amadeus and Systempay APIs to handle ticket bookings and payment
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Developed an admin panel to monitor the number of bookings, users, offers and payment transactions for the client. 
              </motion.p>
            </li>
          </ul>

          <motion.p
              className="mt-2 text-md font-medium text-white"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Tech Stack: React, React Native, Firebase, Redux, Amadeus API, Systempay API
            </motion.p>
        </div> */}
        <motion.hr 
          className="mt-5 border-slate-500" 
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        />
        <div>
          <a target="_blank" href="https://intelliresponse.ai/">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Intelliresponse - Review Management Platform
            </motion.p>
          </a>

          <motion.p
            className="mt-3"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Automated Google review replies using OpenAI, helping businesses manage customer sentiment.
          </motion.p>

          <ul className="list-disc pl-5 mt-2">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Designed dashboards with analytics and filters</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Integrated subscription billing using Razorpay</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Enabled secure, role-based access with PostgreSQL + Express.js</p>
            </motion.li>
          </ul>

          <motion.p
              className="mt-2 text-md font-medium text-white"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Tech Stack: React, Node.js, Tailwind CSS, PostgreSQL, OpenAI, Razorpay
            </motion.p>
        </div>
        <motion.hr 
          className="mt-5 border-slate-500" 
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        />
        <div>
          <a target="_blank" href="https://blackwinstech.com/projects/marathon-app">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Marathon Registration Portal
            </motion.p>
          </a>

          <motion.p
            className="mt-3"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Created a secure registration system with payment and event management for a large-scale marathon.
          </motion.p>

          <ul className="list-disc pl-5 mt-2">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Handled 2000+ user registrations with zero downtime</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Integrated PhonePe API for real-time payments</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Included an admin dashboard for event and payment oversight </p>
            </motion.li>
          </ul>

          <motion.p
              className="mt-2 text-md font-medium text-white"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Tech Stack: React, PostgreSQL, Tailwind, Express.js, PhonePe API
            </motion.p>
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
            Side Projects
            
          </motion.h1>
          <a target="_blank" href="https://lablab.ai/event/anthropic-ai-hackathon/codexai/swiftsearch">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              YouTube Video Summarizer - Anthropic AI Hackathon
            </motion.p>
          </a>

          <motion.p
            className="mt-3"
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Collaborated to build an app that summarizes YouTube videos using Claude AI.
          </motion.p>

          <ul className="list-disc pl-5 mt-2">
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Created a clean UI with Material UI + React Query</p>
            </motion.li>
            <motion.li
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>Integrated Claude API for intelligent summarization</p>
            </motion.li>
          </ul>

          <motion.p
              className="mt-2 text-md font-medium text-white"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Tech Stack: React, Redux toolkit, Material UI, Claude AI, React Query 
            </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
