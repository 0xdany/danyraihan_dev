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
        className="mt-[-200vh] h-[200vh] overflow-clip  
        bg-gradient-to-t from-sky-400 to-blue-500"
      >
        <motion.div
          style={{ x: imageXCalc }}
          className="sticky top-1/2 mx-auto aspect-video w-[1600px] max-w-[90%] rounded-[60px] bg-white shadow-2xl 
          justify-center items-center flex
          md:top-1/4"
        >
          <div className="w-[90%] h-[90%] flex  justify-center">
            <div className="px-10 h-fit pb-4 border-b-[1px] border-slate-400">
              <p className="text-4xl ">Projects</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rest  */}
      <div className="space-y-[80px] bg-gradient-to-b from-sky-400 to-blue-500 md:text-[300px]">
        <p>such a great guy</p>
      </div>
    </main>
  );
}
