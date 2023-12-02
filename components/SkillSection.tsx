import AnimatedText from "@/components/animations/AnimatedText";

const SkillSection = () => {
  return (
    <div className="hidden h-[450px] w-full flex-col items-center justify-center overflow-hidden px-6 lg:flex ">
      <div className=" items-centermt-6 mb-4 flex flex-col justify-center ">
        <div className="fluid-lg bg-gradient-to-r from-orange-700 to-cyan-600 bg-clip-text px-4 font-semibold text-transparent">
          I have worked with
        </div>
        <span className="fluid-sm inline-flex justify-center font-light xl:hidden">
          {" "}
          (scroll...)
        </span>
      </div>
      {/* list of skills */}
      <div className="mt-4 flex h-full items-center justify-center overflow-auto overflow-y-scroll text-center font-semibold text-white lg:gap-2">
        <AnimatedText
          el="p"
          text={
            "NextJs • ReactJS • TailwindCSS • Unity • MongoDB • Supabase • Solidity • C++ • Java • C# • PosgreSQL • Arduino • Figma • Arduino • Vercel • R • Jupiter • IntelliJ • VS Code • Github"
          }
          className="fluid-base h-full text-center text-slate-700"
          repeatDelay={10000}
        />
      </div>
    </div>
  );
};

export default SkillSection;
