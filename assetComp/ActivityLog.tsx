import Image from "next/image";

const ActivityLog = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center border-b-[1px] border-slate-400 py-2 pb-4">
        <p className="inline-block justify-center bg-gradient-to-r from-orange-700 to-cyan-600 bg-clip-text py-1 text-5xl font-bold text-transparent">
          ACTIVITY LOG
        </p>
      </div>

      {/* Timeline */}
      <div className="px-6">
        {/* Genta */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              Now
            </time>
            <a
              href="https://genta.tech/"
              target="_blank"
              className="flex gap-1 rounded-xl  bg-gradient-to-r from-slate-800 to-cyan-700 px-2 py-1 text-xl font-bold text-white"
            >
              Genta Technology
              <Image
                priority
                src="link_icon.svg"
                width="20"
                height="20"
                alt="link"
              />
            </a>
          </div>

          {/* Tech */}
          <div className="py-2 font-semibold text-slate-600 md:flex ">
            <div className="flex-none">Self-employed</div>

            <div className="justify-center md:flex  md:grow  md:px-4">
              Tool: NextJS, PostgreSQL, Stripe, Node.js, Tailwind
            </div>

            <div className="flex-none">
              Language: TypeScript, Postgres, HTML
            </div>
          </div>

          {/* Content */}
          <div className="leading-7 text-slate-500 md:leading-8">
            As a full-stack developer, I built a marketplace site where people
            top up and use available NLP models by accessing API of our
            inference server
            <br />• Designed the website interface with Tailwind CSS and
            Framer-motion
            <br />• Constructed handling global payment system using Stripe
            webhooks
            <br />• Implemented Supabase PostgreSQL as a database and created
            costumize PostgreSQL functions to handle user’s data, model’s data,
            and payment history.
          </div>
        </div>
        {/* Document Search */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              Aug, 2023
            </time>
            <a
              href="https://github.com/Genta-Technology/Document-Search"
              target="_blank"
              className="flex gap-1 rounded-xl  bg-gradient-to-r from-green-950 to-yellow-900 px-2 py-1 text-xl font-bold text-white"
            >
              Document Search
              <Image
                priority
                src="link_icon.svg"
                width="20"
                height="20"
                alt="link"
              />
            </a>
          </div>

          {/* Tech */}
          <div className="py-2 font-semibold text-slate-600 md:flex ">
            <div className="flex-none">Group Project</div>

            <div className="justify-center md:flex  md:grow  md:px-4">
              Tool: Next.js, ReactJS, ONNX, Node.js
            </div>

            <div className="flex-none">Language: TypeScript, HTML</div>
          </div>

          {/* Content */}
          <div className="leading-7 text-slate-500 md:leading-8">
            As a software developer, I am designing model selector for PDF
            question-answering from HuggingFace’s transformer model
            <br />• Implemented ONNX Natural language processing (NLP) model aa
            closure component in the project.
            <br />• Built model selector from HuggingFace to be implemented in
            javascript with Transformer.js
          </div>
        </div>
        {/* Bookmarq */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              Sept, 2023
            </time>
            <a
              href="https://github.com/0xdany/bookmarq"
              target="_blank"
              className="flex gap-1 rounded-xl  bg-gradient-to-r from-sky-950 to-red-900 px-2 py-1 text-xl font-bold text-white"
            >
              Bookmarq: bookmark-sharing platform
              <Image
                priority
                src="link_icon.svg"
                width="20"
                height="20"
                alt="link"
              />
            </a>
          </div>

          {/* Tech */}
          <div className="py-2 font-semibold text-slate-600 md:flex ">
            <div className="flex-none">Personal project</div>

            <div className="justify-center md:flex  md:grow  md:px-4">
              Tool: Next.js, ReactJS, Node.js, Tailwind, MongoDB
            </div>

            <div className="flex-none">Language: Javascript, HTML</div>
          </div>

          {/* Content */}
          <div className="leading-7 text-slate-500 md:leading-8">
            As a full-stack developer, I built the website-interface where users
            can login, share their bookmarks, add description and label them
            based on tags
            <br />• Implemented authentication using Google Auth that tracks
            user’s activity and sync it real-time to the database.
            <br />• Constructed document-oriented database using MongoDB Atlas
            and designed schema models with Mongoose for User, Post, and Group.
            <br />• Added creating, retrieving, updating, and deleting (CRUD)
            interactions on post schema based on authentication.
          </div>
        </div>
        {/* Hardhat */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              Dec, 2022
            </time>
            <a
              href="https://github.com/0xdany/hardhat-crowdfunding-bp"
              target="_blank"
              className="flex gap-1 rounded-xl  bg-gradient-to-r from-orange-950 to-blue-900 px-2 py-1 text-xl font-bold text-white"
            >
              Hardhat Funding Boilerplate
              <Image
                priority
                src="link_icon.svg"
                width="20"
                height="20"
                alt="link"
              />
            </a>
          </div>

          {/* Tech */}
          <div className="py-2 font-semibold text-slate-600 md:flex ">
            <div className="flex-none">Personal project</div>

            <div className="justify-center md:flex  md:grow  md:px-4">
              Tool: Hardhat, Ganache
            </div>

            <div className="flex-none">
              Language: Solidity, Javascript, HTML
            </div>
          </div>

          {/* Content */}
          <div className="leading-7 text-slate-500 md:leading-8">
            As a developer, I created the boiler-plate project for decentralized
            crowdfunding website with basic smart-contracts, a unit test, and a
            deploy script
            <br />• Constructed payable smart-contract interactions to send and
            withdraw Ethereum token.
            <br />• Designed a thorough test unit for the solidity contracts
            that covers reentrancy and unprotected functions.
            <br />• Prepared a deployment mock script and a customizable script
            to deploy solidity contracts to Georli testnet.
          </div>
        </div>
        {/* Safecious */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
            <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
              June, 2021
            </time>
            <div className="flex gap-1 rounded-xl  bg-gradient-to-r from-slate-600 to-zinc-700 px-2 py-1 text-xl font-bold text-white">
              Safecious: Body Temperature Monitoring Wearable
            </div>
          </div>
          {/* Tech */}
          <div className="py-2 font-semibold text-slate-600 md:flex">
            <div className="flex-none">Research</div>

            <div className="justify-center md:flex  md:grow  md:px-4">
              Tool: Arduino IDE, Fritzing
            </div>

            <div className="flex-none">Language: C++</div>
          </div>
          {/* Content */}
          <div className="leading-7 text-slate-500 md:leading-8">
            As a researcher, I developed a small-scale decentralized body
            temperature wearable using ESP32 development board and MCP9808
            module
            <br /> • Customized power management system and temperature modules
            layout in the board using Fritzing
            <br /> • Implemented a data parser to extract data from Serial Data
            Line (SDA)
            <br /> • Constructed real-time connection to ThingSpeak API public
            channel.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
