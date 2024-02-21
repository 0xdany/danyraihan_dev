const NameCard = () => {
  return (
    <div className="flex h-full min-w-[350px] flex-col rounded-xl px-8 py-5 shadow-md">
      <div className="mb-1 md:mb-auto">
        <p className="fluid-heading bg-gradient-to-r from-cyan-800 to-orange-950 bg-clip-text font-semibold leading-none text-transparent">
          Dany Raihan
        </p>
        <p className="fluid-base ml-1 border-t-[2px] border-slate-200 pb-1 pt-4 text-slate-500 sm:pb-6">
          2nd Year Major in Computer Science at UBC
        </p>
      </div>

      {/* Perks */}
      <div className="fluid-base mt-6 gap-2 pl-1 sm:mt-0">
        <p className="mb-1 border-b-[1px] border-slate-200">Code Mage</p>
        <a
          href="mailto:dannyraihan123@gmail.com"
          className="bg-gradient-to-r from-sky-900 via-red-900 to-green-900 bg-clip-text text-transparent"
        >
          dannyraihan123@gmail.com
        </a>
        <br />

        <a
          href="https://github.com/0xdany"
          target="_blank"

        >
          Github/0xdany
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/dany-raihan/"
          target="_blank"
          className="bg-gradient-to-r from-cyan-800 to-blue-500 bg-clip-text text-transparent"
        >
          linkedin/dany-raihan
        </a>
      </div>
    </div>
  );
};

export default NameCard;
