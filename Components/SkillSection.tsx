import AnimatedText from "@/Components/Animations/AnimatedText";

const SkillSection = () => {
  return (
    <div className="hidden h-[450px] w-full flex-col items-center justify-center overflow-hidden px-6 lg:flex ">
      <div className=" items-centermt-6 mb-4 flex flex-col justify-center ">
        <div className="bg-gradient-to-r from-orange-700 to-cyan-600 bg-clip-text px-4 text-xl font-semibold text-transparent xl:text-2xl">
          I have worked with
        </div>
        <span className="inline-flex justify-center text-base font-light xl:hidden">
          {" "}
          (scroll...)
        </span>
      </div>
      {/* list of skills */}
      <div className="mt-4 flex h-full items-center justify-center overflow-auto overflow-y-scroll text-center text-lg font-semibold text-white lg:gap-2">
        <AnimatedText
          el="p"
          text={
            "NextJs • ReactJS • TailwindCSS • Unity • MongoDB • Supabase • Solidity • C++ • Java • C# • PosgreSQL • Arduino • Figma • Arduino • Vercel • R • Jupiter • IntelliJ • VS Code • Github"
          }
          className="inline-flex h-full text-center text-base text-slate-700 lg:text-lg xl:text-3xl"
          repeatDelay={10000}
        />
      </div>
    </div>
  );
};

export default SkillSection;
