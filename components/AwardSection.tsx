import AnimatedText from "./animations/AnimatedText";

const items = [
  {
    id: 1,
    title: "Best Overall Research, Capstone Conference",
    date: "AUG 2023",
    issuer: "Issued by The University of British Columbia",
    desc: "Our research project focused on investigating the specific characteristics of the P-53 tumor suppressor gene. To achieve this, we created a comprehensive database within a controlled environmental model to generate the P-53 tumor suppressor gene mutagen mutational pathway.",
  },
  {
    id: 2,
    title: "Indonesia Maju Undergraduate Scholarship",
    date: "APR 2022",
    issuer:
      "Issued by The Ministry of Education, Culture, and Technology of Indonesia",
    desc: "Received a full-ride undergraduate degree scholarship for performance in the Indonesia Informatics Olympiad 2020.",
  },
  {
    id: 3,
    title:
      "Third Place in Asian Parliamentary Debate, Cendana English Fair XIX",
    date: "NOV 2021",
    issuer: "Issued by Bengkulu Public High School V",
    desc: "Worked with a team of three to debate competitively on several motions in the Asian Parliamentary format. The motions were related to current issues, such as the COVID-19 pandemic, the Omnibus Law, and the  Presidential Election.",
  },
  {
    id: 3,
    title: "First Place, Tech Innovation Fair 2021",
    date: "OCT 2021",
    issuer: "Issued by Regional Development Planning Board of Bengkulu",
    desc: "Developed a locally decentralized body temperature wearable. It would allow people to monitor changing body temperatures among each other and provide early fever indications to mitigate the risk of potential spreading.",
  },
  {
    id: 4,
    title: "First Place, Tech Innovation Fair 2019",
    date: "OCT 2019",
    issuer: "Issued by Regional Development Planning Board of Bengkulu",
    desc: "Built an adaptable water control gate for small- to medium-level irrigation. The water control system adjusts itself based on changing water streams across the system to avoid potential overflow. Current information would also be broadcast continuously to the stakeholder's devices.",
  },
  {
    id: 99,
    title: "First Place in Creative IRO, IIBF-ROCI Robotic Competition",
    date: "SEP 2018",
    issuer: "Issued by Robotic Organizing Committee Indonesia",
    desc: "Created an intergated plant incubator for the seeding phase. It adjusted the encapsulated environment based on variable changes in soil humidity, fertilizer content, and lumination level to mimic the ideal growing environment.",
  },
];

const AwardSection = () => {
  return (
    <div className="block h-fit w-full items-center justify-center space-y-6">
      {/* Title */}
      <div className="flex justify-center border-b-[1px] border-white py-2 pb-4">
        <p className="fluid-heading inline-block justify-center bg-gradient-to-r from-zinc-200 via-white to-slate-200 bg-clip-text py-1 font-bold text-transparent">
          AWARDS
        </p>
      </div>

      {/* awards */}
      <div className="h-fit w-full space-y-6">
        {items.map((item) => (
          <div
            className="flex flex-row justify-between gap-6 rounded-3xl bg-gradient-to-r from-white to-sky-200 px-6 py-4 text-slate-800 shadow-xl"
            key={item.id}
          >
            <div>
              <AnimatedText
                text={item.title}
                className="fluid-base font-bold"
                repeatDelay={10000}
              />
              <AnimatedText
                text={item.issuer}
                className="fluid-sm border-b-2 border-sky-100 pl-1 font-light text-slate-700"
                repeatDelay={10000}
              />
              <p className="fluid-sm mt-2 pl-1 font-normal text-slate-500">
                {item.desc}
              </p>
            </div>

            <AnimatedText
              text={item.date}
              className="fluid-sm mt-2 w-[5px] text-left font-bold sm:text-right lg:w-2/12"
              repeatDelay={10000}
            />
          </div>
        ))}

        <div className="fluid-lg mt-10 text-center font-thin leading-none tracking-widest text-white">
          This section is under construction... <br />
          🚜 🚜 🚜
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
