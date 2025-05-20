import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants/variants";


function Projects() {
  return (
    <motion.div className="w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/30 px-[20%] pt-2 lg:pt-[5%] pb-20">
      <div className="text-left w-full">
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
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Built with React, TypeScript, Tailwind CSS, Hero UI, and Framer Motion
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Integrated a multi-step job application form with real-time validation
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Developed Express + MongoDB backend for applicant tracking and data storage
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
              Tech Stack: React, TypeScript, Tailwind CSS, Redux, Framer Motion, Express.js, Mongo DB 
            </motion.p>
        </div>
        <hr className="mt-5 border-slate-500" />
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
        </div>
        <hr className="mt-5 border-slate-500" />
        <div>
          <a target="_blank" href="https://blackwinstech.com/">
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
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Handled 2000+ user registrations with zero downtime
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Integrated PhonePe API for real-time payments
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Included an admin dashboard for event and payment oversight 
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
              Tech Stack: React, PostgreSQL, Tailwind, Express.js, PhonePe API
            </motion.p>
        </div>
        <hr className="mt-5 border-slate-500" />
        <div>
          <a target="_blank" href="https://blackwinstech.com/">
            <motion.p
              className="mt-5 text-xl font-medium text-white hover:underline"
              variants={fadeIn("down", 1.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Review Management Platform
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
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Designed dashboards with analytics and filters
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Integrated subscription billing using Razorpay
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Enabled secure, role-based access with PostgreSQL + Express.js
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
              Tech Stack: React, Node.js, Tailwind CSS, PostgreSQL, OpenAI, Razorpay
            </motion.p>
        </div>
        <hr className="mt-5 border-slate-500" />
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
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Created a clean UI with Material UI + React Query
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={fadeIn("down", 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                Integrated Claude API for intelligent summarization
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
              Tech Stack: React, Redux toolkit, Material UI, Claude AI, React Query 
            </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
