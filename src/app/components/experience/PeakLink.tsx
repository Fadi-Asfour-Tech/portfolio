import React from "react";
import { BiSolidZap } from "react-icons/bi";
import { motion } from "framer-motion";

export default function PeakLink() {
  const tasks = [
    {
      text: "The company was the supervisor for the Kafo System: The freelancing system was developed using Flutter, React, and Laravel to offer a freelancing environment for Syrian freelancers and stakeholders using mobile and web apps, and manage this system and its operations using the dashboard web app.",
    },
    {
      text: " My role was leading a team of 5 members, managing the project, analyzing the system, and developing mobile and dashboard apps using Flutter.",
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
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Flutter Developer & System Analyst
              </span>
              {/* <span className="text-sm">Remote</span> */}
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span></span>

              {/* Date */}
              <span> September 2023 - August 2024</span>
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
                Technologies used: Next.js, TypeScript, Tailwind CSS, React
                Query, and Shadcn UI.
              </span>
            </div> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
