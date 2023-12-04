const NameCard = () => {
  return (
    <div className="flex h-full flex-col rounded-xl px-8 py-5 shadow-md sm:w-4/5">
      <div className="mb-1 md:mb-auto">
        <p className="fluid-heading bg-gradient-to-r from-cyan-800 to-orange-950 bg-clip-text font-sans  font-semibold leading-none text-transparent ">
          Dany Raihan
        </p>
        <p className="fluid-sm ml-1 border-t-[2px]  border-slate-200 pb-1 pt-4 text-slate-500 sm:pb-6">
          2nd Year Major in Computer Science at UBC
        </p>
      </div>

      {/* Perks */}
      <div className="fluid-xs mt-6  space-y-1 pl-1 sm:mt-0">
        <p className="mb-1 border-b-[1px] border-slate-200">
          Full-Stack Developer
        </p>

        <a
          href="mailto:dannyraihan123@gmail.com"
          className="bg-gradient-to-r from-sky-900 via-red-900 to-green-900 bg-clip-text text-transparent"
        >
          dannyraihan123@gmail.com
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/dany-raihan/"
          target="_blank"
          className="bg-gradient-to-r from-cyan-900 to-blue-900 bg-clip-text text-transparent"
        >
          linkedin/dany-raihan
        </a>
        <br />
        <a
          href="tel:+12369958234"
          className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent"
        >
          (236) 995 - 8234
        </a>
        <br />
      </div>
    </div>
  );
};

export default NameCard;
