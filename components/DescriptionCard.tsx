import Magnetic from "./animations/Magnetic";

const DescriptionCard = () => {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl px-8 py-6 shadow-md max-h-[600px] min-w-[300px]">
      <p className="fluid-base">
        I enjoy exploring new things. Be it a new language, a stack, or even another JS framework. Whatever it takes to get the job done.
        <br /> <br /> As Frieren the slayer once said,
      </p>

      <Magnetic>
        <p className="bg-gradient-to-r from-sky-600 via-red-700 to-green-600 bg-clip-text text-center text-3xl font-semibold text-transparent">
          The greatest joy of magic lies in searching for it
        </p>
      </Magnetic>

      <div className="flex w-full justify-between">
        <a
          href="https://drive.google.com/file/d/1OjP6e57oLCx0RjJBhFRcl1iRr1MlMOUC/view?usp=sharing"
          target="_blank"
          className="bg-gradient-to-r from-cyan-800 to-blue-600 bg-clip-text text-transparent"
        >
          Resume {">"}
        </a>

        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
        >
          <p className="bg-gradient-to-r from-cyan-800 to-blue-600 bg-clip-text text-transparent">
            Crafts {">"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default DescriptionCard;
