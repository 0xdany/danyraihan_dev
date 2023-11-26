import AnimatedText from "./animations/AnimatedText";

const items = [
  {
    title: "Best Overall Research in Capstone Conference",
    date: "AUG 2023",
    issuer: "Issued by The University of British Columbia",
    desc: "Our research project focused on investigating the specific characteristics of the P-53 tumor suppressor gene. To achieve this, we created a comprehensive database within a controlled environmental model to generate the P-53 tumor suppressor gene mutagen mutational pathway.",
  },
  {
    title: "Indonesia Maju Undergraduate Scholarship",
    date: "APR 2022",
    issuer:
      "Issued by The Ministry of Education, Culture, and Technology of Indonesia",
    desc: "Received a full-ride undergraduate degree scholarship for performance in the Indonesia Informatics Olympiad 2020",
  },
];

const AwardSection = () => {
  return (
    <div className="block h-fit w-full items-center justify-center space-y-6 ">
      {/* Title */}
      <div className="flex justify-center border-b-[1px] border-white py-2 pb-4">
        <p className="inline-block justify-center bg-gradient-to-r from-zinc-200 via-white to-slate-200 bg-clip-text py-1 text-5xl font-bold text-transparent">
          AWARDS
        </p>
      </div>

      {/* awards */}
      <div className="h-fit w-full space-y-6">
        {items.map((item) => (
          <div className="flex flex-row justify-between gap-6 rounded-3xl bg-gradient-to-r from-white to-sky-200 px-6 py-4 text-slate-800 shadow-xl">
            <div>
              <AnimatedText
                text={item.title}
                className="text-2xl font-bold"
                repeatDelay={10000}
              />
              <AnimatedText
                text={item.issuer}
                className="border-b-2 border-sky-100 pl-1 text-base font-light text-slate-700"
                repeatDelay={10000}
              />
              <p className="mt-2 pl-1 text-base font-normal text-slate-500">
                text={item.desc}
              </p>
            </div>

            <AnimatedText
              text={item.date}
              className="mt-2 w-2/12 text-right text-2xl font-bold"
              repeatDelay={10000}
            />
          </div>
        ))}

        <p>More to be added</p>
      </div>
    </div>
  );
};

export default AwardSection;
