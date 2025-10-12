import { motion } from "framer-motion";
import { BiSolidZap } from "react-icons/bi";

export default function BlindCareAssociation() {
  const tasks = [
    {
      text: "Developed applications to manage the association, facilitate work in it, and help the blind. ",
    },
    {
      text: "Admin & User Apps: Two mobile applications for the Blind Care Association one to manage the association, its donations, and beneficiaries, and another for benefactors and beneficiaries. The applications support Talkback accessibility. The apps decreased the number of employees from 10 to 3 on normal days and from 25 to 7 on stress days. ",
    },
    {
      text: "Analyzing the Blind Association system: Applying Software Engineering principles for the Association project.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 ">
          <div className="spacey-y-2 flex flex-col">
            <div className="flex items-center justify-between">
              {/* Title */}
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Mobile Software Engineer
              </span>
              <span className="text-sm">Part-time</span>
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span></span>

              {/* Date */}
              <span> March 2023 - January 2024</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <BiSolidZap className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            {/* <div className="flex flex-row space-x-2">
              <BiSolidZap className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-heading">
                Technologies used: React.js, Next.js, Redux, React Query,
                TypeScript, Tailwind CSS, and Shadcn UI.
              </span>
            </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
