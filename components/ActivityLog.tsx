import Image from "next/image";

const items = [
  {
    id: 1,
    date: "NOW",
    title: "Genta Technology",
    link: "https://genta.tech/",
    type: "Self-employed",
    tool: "Tool: NextJS, PostgreSQL, Stripe, Node.js, Tailwind",
    language: "Language: TypeScript, Postgres, HTML",
    content:
      "As a full-stack developer, I built a marketplace site where people top up and use available NLP models by accessing API of our inference server • Designed the website interface with Tailwind CSS and Framer-motion • Constructed handling global payment system using Stripe webhooks • Implemented Supabase PostgreSQL as a database and created costumize PostgreSQL functions to handle user’s data, model’s data, and payment history.",
  },
  {
    id: 2,
    date: "Aug, 2023",
    title: "Document Search",
    link: "https://github.com/Genta-Technology/Document-Search",
    type: "Group Project",
    tool: "Tool: Next.js, ReactJS, ONNX, Node.js",
    language: "Language: TypeScript, HTML",
    content:
      "As a software developer, I am designing model selector for PDF question-answering from HuggingFace’s transformer model Implemented ONNX Natural language processing (NLP) model as a closure component in the project. \n \t• Built model selector from HuggingFace to be implemented in javascript with Transformer.js",
  },
  {
    id: 3,
    date: "SEPT, 2023",
    title: "Bookmarq: bookmark-sharing platform",
    link: "https://github.com/0xdany/bookmarq",
    type: "Personal project",
    tool: "Tool: Next.js, ReactJS, Node.js, Tailwind, MongoDB",
    language: "Language: Javascript, HTML",
    content:
      "As a full-stack developer, I built the website-interface where users can login, share their bookmarks, add description and label them based on tags • Implemented authentication using Google Auth that tracks user’s activity and sync it real-time to the database. • Constructed document-oriented database using MongoDB Atlas and designed schema models with Mongoose for User, Post, and Group. • Added creating, retrieving, updating, and deleting (CRUD) interactions on post schema based on authentication.",
  },
  {
    id: 4,
    date: "DEC, 2022",
    title: "Hardhat Funding Boilerplate",
    link: "https://github.com/0xdany/hardhat-crowdfunding-bp",
    type: "Personal project",
    tool: "Tool: Hardhat, Ganache",
    language: "Language: Solidity, Javascript, HTML",
    content:
      "As a developer, I created the boiler-plate project for decentralized crowdfunding website with basic smart-contracts, a unit test, and a deploy script • Constructed payable smart-contract interactions to send and withdraw Ethereum token. • Designed a thorough test unit for the solidity contracts that covers reentrancy and unprotected functions. • Prepared a deployment mock script and a customizable script to deploy solidity contracts to Georli testnet.",
  },
  {
    id: 5,
    date: "DEC, 2022",
    title: "Safecious: Body Temperature Monitoring Wearable",
    link: "",
    type: "Research",
    tool: "Language: C++",
    language: "Language: Arduino IDE",
    content:
      "As a researcher, I developed a small-scale decentralized body temperature wearable using ESP32 development board and MCP9808 module • Customized power management system and temperature modules layout in the board using Fritzing • Implemented a data parser to extract data from Serial Data Line (SDA) • Constructed real-time connection to ThingSpeak API public channel.",
  },
];

const ActivityLog = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center border-b-[1px] border-slate-400 py-2 pb-4">
        <p className="fluid-xl inline-block justify-center bg-gradient-to-r from-orange-700 to-cyan-600 bg-clip-text py-1 font-bold text-transparent">
          Activity Log
        </p>
      </div>

      {/* Timeline */}
      <div className="px-6">
        {items.map((item) => (
          <div className="group relative py-6 pl-8 sm:pl-32" key={item.id}>
            <div className="mb-1 flex flex-col before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
              <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 sm:absolute sm:mb-0">
                {item.date}
              </time>
              {item.link != "" ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="fluid-base flex gap-1 rounded-xl  bg-gradient-to-r from-slate-800 to-orange-800 px-2 py-1  font-bold text-white"
                >
                  {item.title}
                  <Image
                    priority
                    src="link_icon.svg"
                    width="20"
                    height="20"
                    alt="link"
                  />
                </a>
              ) : (
                <p className="fluid-base flex gap-1  rounded-xl bg-slate-700 px-2 py-1 font-bold text-white">
                  {item.title}
                </p>
              )}
            </div>

            {/* Tech */}
            <div className="fluid-sm py-2 font-semibold text-slate-600 lg:flex ">
              <div className="flex-none">{item.type}</div>

              <div className="lg:flex lg:grow  lg:justify-center  lg:px-4">
                {item.tool}
              </div>

              <div className="flex-none">{item.language}</div>
            </div>

            {/* Content */}
            <div className="fluid-sm leading-7 text-slate-500 md:leading-8">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
