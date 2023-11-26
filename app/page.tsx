"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import "@/styles/globals.css";

import NameCard from "@/Components/NameCard";
import SkillSection from "@/Components/SkillSection";
import ActivityLog from "@/Components/ActivityLog";
import AwardSection from "@/Components/AwardSection";

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
  const opacityReverse = useTransform(
    scrollYProgress,
    [0, 0.18, 0.25],
    [0, 0, 1],
  );

  return (
    <main>
      <div ref={ref} className="z-1 relative h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20"
        >
          <div className="window-mask flex flex-col gap-10 rounded-3xl bg-white p-12 md:flex-row ">
            <NameCard />
            <SkillSection />
            {/* The amazing hole */}
            <div className="mx-auto -mb-7 mt-4 box-content h-[90%] w-[100%] min-w-[150px] md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]" />
          </div>
        </motion.div>
      </div>

      {/* Stuff inside hole */}
      <div className="z-2 mt-[-220vh] h-fit overflow-clip bg-gradient-to-t from-sky-400 to-blue-500 pb-16 pt-[47vh]">
        {/* Smile */}
        <motion.div
          style={{ x: imageXCalc, opacity: opacity }}
          className="mb-[250px] px-5"
        >
          <Image
            priority
            src="smile.svg"
            width="250"
            height="250"
            className="-ml-16 hidden sm:block"
            alt="smile"
          />
          <div className="flex justify-start font-normal text-white">
            Scroll for more
          </div>
        </motion.div>

        {/* Next Section */}
        <motion.div
          style={{ x: imageXCalc, opacity: opacityReverse }}
          className="sticky top-1/2 mx-auto grid w-[1600px] max-w-[90%]  grid-cols-1 justify-items-center rounded-[60px] bg-white shadow-2xl md:top-1/4"
        >
          {/* Area inside hole */}
          <div className="flex-col pb-10">
            <ActivityLog />
          </div>
        </motion.div>
      </div>

      {/* Rest */}
      <div className="flex justify-center bg-gradient-to-b from-sky-400 to-cyan-400">
        <div className="flex w-[1600px]  max-w-[90%] flex-col items-center justify-center pb-10 ">
          <AwardSection />
        </div>
      </div>
    </main>
  );
}
