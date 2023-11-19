"use client";

import {
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "@/styles/globals.css";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) as MotionValue<number>;
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main>
      <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr]
          md:origin-[90%_40%] md:pt-20"
        >
          <div className="window-mask flex flex-col rounded-3xl bg-slate-50 p-12 md:flex-row">
            <div className="flex h-full flex-col">
              {/* Title */}
              <div className="md:mb-auto mb-1 ">
                <p
                  className="text-2xl max-w-[12ch] font-md leading-loose  font-sans font-semibold py-2
                  bg-gradient-to-r from-cyan-800 to-orange-950 inline-block text-transparent bg-clip-text
                  md:text-4xl 
                  xl:text-6xl
                  "
                >
                  Dany Raihan
                </p>
                <p className="text-lg text-slate-500 font-md ml-1 border-t-[2px] border-slate-200">
                  2nd Year Major in Computer Science at UBC
                </p>
              </div>

              {/* Desc */}
              <div className="text-md space-y-1 pl-1 ">
                <p className="border-b-[1px] border-slate-200 mb-1">
                  Full-Stack Developer
                </p>

                <a
                  href="mailto:dannyraihan123@gmail.com"
                  className="bg-gradient-to-r from-sky-900 via-red-900 to-green-900 text-transparent bg-clip-text"
                >
                  dannyraihan123@gmail.com
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/dany-raihan/"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-900 to-blue-900 text-transparent bg-clip-text"
                >
                  linkedin/dany-raihan
                </a>
                <br />
                <a
                  href="tel:+12369958234"
                  className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text"
                >
                  (236) 995 - 8234
                </a>
                <br />
              </div>
            </div>

            {/* Scroll hole */}
            <div
              className="mx-auto -mb-7 mt-4 box-content h-[90%] w-[100%] min-w-[150px] 
              md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Stuff inside hole */}
      <div
        className="mt-[-220vh] pt-[47vh] h-fit overflow-clip  
        bg-gradient-to-t from-sky-400 to-blue-500 pb-16"
      >
        <motion.div
          style={{ x: imageXCalc, opacity }}
          className="mb-[250px] px-7 "
        >
          <Image
            priority
            src="smile.svg"
            width="250"
            height="250"
            alt="Follow us on Twitter"
          />
          <div className="text-white flex justify-start font-normal">
            Scroll for more
          </div>
        </motion.div>

        {/* Panel */}
        <motion.div
          style={{ x: imageXCalc }}
          className="sticky top-1/2 mx-auto h-fit w-[1600px] max-w-[90%] rounded-[60px]
          bg-white shadow-2xl grid grid-cols-1 justify-items-center
          md:top-1/4"
        >
          {/* Area */}
          <div className="w-[90%] h-fit flex-col pb-10">
            <div className="h-fit pb-4 py-2 flex justify-center  border-b-[1px] border-slate-400">
              <p
                className="text-4xl justify-center font-semibold
                  bg-gradient-to-r to-cyan-600 from-orange-700 inline-block text-transparent bg-clip-text py-1"
              >
                Activity log
              </p>
            </div>

            {/* Timeline */}
            <div className="ml-8">
              {/* Genta */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Now
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Genta Technology
                  </div>
                </div>

                {/* Tech */}
                <div className="text-slate-600 font-semibold md:flex py-2 ">
                  <div className="flex-none">Self-employed</div>

                  <div className="md:grow md:flex  md:px-4  justify-center">
                    Tool: NextJS, PostgreSQL, Stripe, Node.js, Tailwind
                  </div>

                  <div className="flex-none">
                    Language: TypeScript, Postgres, HTML
                  </div>
                </div>

                {/* Content */}
                <div className="text-slate-500 leading-7 md:leading-8">
                  As a full-stack developer, I built a marketplace site where
                  people top up and use available NLP models by accessing API of
                  our inference server
                  <br />• Designed the website interface with Tailwind CSS and
                  Framer-motion
                  <br />• Constructed handling global payment system using
                  Stripe webhooks
                  <br />• Implemented Supabase PostgreSQL as a database and
                  created costumize PostgreSQL functions to handle user’s data,
                  model’s data, and payment history.
                </div>
              </div>
              {/* Document Search */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Aug, 2023
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Document Search
                  </div>
                </div>

                {/* Tech */}
                <div className="text-slate-600 font-semibold md:flex py-2 ">
                  <div className="flex-none">Group Project</div>

                  <div className="md:grow md:flex  md:px-4  justify-center">
                    Tool: Next.js, ReactJS, ONNX, Node.js
                  </div>

                  <div className="flex-none">Language: TypeScript, HTML</div>
                </div>

                {/* Content */}
                <div className="text-slate-500 leading-7 md:leading-8">
                  As a software developer, I am designing model selector for PDF
                  question-answering from HuggingFace’s transformer model
                  <br />• Implemented ONNX Natural language processing (NLP)
                  model aa closure component in the project.
                  <br />• Built model selector from HuggingFace to be
                  implemented in javascript with Transformer.js
                </div>
              </div>
              {/* Bookmarq */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Sept, 2023
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Bookmarq: bookmark-sharing platform
                  </div>
                </div>

                {/* Tech */}
                <div className="text-slate-600 font-semibold md:flex py-2 ">
                  <div className="flex-none">Personal project</div>

                  <div className="md:grow md:flex  md:px-4  justify-center">
                    Tool: Next.js, ReactJS, Node.js, Tailwind, MongoDB
                  </div>

                  <div className="flex-none">Language: Javascript, HTML</div>
                </div>

                {/* Content */}
                <div className="text-slate-500 leading-7 md:leading-8">
                  As a full-stack developer, I built the website-interface where
                  users can login, share their bookmarks, add description and
                  label them based on tags
                  <br />• Implemented authentication using Google Auth that
                  tracks user’s activity and sync it real-time to the database.
                  <br />• Constructed document-oriented database using MongoDB
                  Atlas and designed schema models with Mongoose for User, Post,
                  and Group.
                  <br />• Added creating, retrieving, updating, and deleting
                  (CRUD) interactions on post schema based on authentication.
                </div>
              </div>
              {/* Hardhat */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Dec, 2022
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Hardhat Funding Boilerplate
                  </div>
                </div>

                {/* Tech */}
                <div className="text-slate-600 font-semibold md:flex py-2 ">
                  <div className="flex-none">Personal project</div>

                  <div className="md:grow md:flex  md:px-4  justify-center">
                    Tool: Hardhat, Ganache
                  </div>

                  <div className="flex-none">
                    Language: Solidity, Javascript, HTML
                  </div>
                </div>

                {/* Content */}
                <div className="text-slate-500 leading-7 md:leading-8">
                  As a developer, I created the boiler-plate project for
                  decentralized crowdfunding website with basic smart-contracts,
                  a unit test, and a deploy script
                  <br />• Constructed payable smart-contract interactions to
                  send and withdraw Ethereum token.
                  <br />• Designed a thorough test unit for the solidity
                  contracts that covers reentrancy and unprotected functions.
                  <br />• Prepared a deployment mock script and a customizable
                  script to deploy solidity contracts to Georli testnet.
                </div>
              </div>
              {/* Safecious */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    June, 2021
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    Safecious: Body Temperature Monitoring Wearable
                  </div>
                </div>
                {/* Tech */}
                <div className="text-slate-600 font-semibold md:flex py-2">
                  <div className="flex-none">Research</div>

                  <div className="md:grow md:flex  md:px-4  justify-center">
                    Tool: Arduino IDE, Fritzing
                  </div>

                  <div className="flex-none">Language: C++</div>
                </div>
                {/* Content */}
                <div className="text-slate-500 leading-7 md:leading-8">
                  As a researcher, I developed a small-scale decentralized body
                  temperature wearable using ESP32 development board and MCP9808
                  module
                  <br /> • Customized power management system and temperature
                  modules layout in the board using Fritzing
                  <br /> • Implemented a data parser to extract data from Serial
                  Data Line (SDA)
                  <br /> • Constructed real-time connection to ThingSpeak API
                  public channel.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rest  */}
      <div className="space-y-[80px] bg-gradient-to-b from-sky-400 to-blue-500 text-[300px]">
        <p className="text-white">such a great guy</p>
      </div>
    </main>
  );
}
