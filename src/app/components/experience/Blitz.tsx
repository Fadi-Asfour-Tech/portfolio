import React from "react";
import { motion } from "framer-motion";
import { BiSolidZap } from "react-icons/bi";

export default function Blitz() {
  const SDE1Tasks = [
    {
      text: "Led the development of the Quick Order Allocation system, a core component of Blitz’s 1-hour COM delivery operations, streamlining dispatch workflows and reducing delays in high-priority shipments.",
    },
  ];
  const InternTasks = [
    {
      text: "Revamped and optimized the Reverse Quality Check flow for return tasks, reducing operational errors by 30% and cutting processing time per task by 40%, resulting in smoother rider operations and improved SLA compliance.",
    },
    {
      text: "Worked with the team to integrate HyperVerge for real-time KYC document verification, improving rider onboarding speed by 50% and ensuring 95%+ accuracy in identity verification, reducing manual verification overhead.",
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
        <div className="flex w-full flex-col ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                SDE 1
              </span>
              <span className="text-sm">Bangalore, India</span>
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span></span>

              {/* Date */}
              <span>June 2025 - Present</span>
            </div>
            <div className="flex flex-col space-y-1 text-sm sm:text-base">
              {SDE1Tasks?.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row space-x-2">
                    <BiSolidZap className={"h-5 w-4 flex-none"} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                SDE Intern
              </span>
              {/* <span className="text-sm">Bangalore, India</span> */}
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span></span>

              {/* Date */}
              <span>Nov 2024 - May 2025</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {InternTasks?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <BiSolidZap className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            <div className="flex flex-row space-x-2">
              <BiSolidZap className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-heading">
                Technologies used: Flutter, Dart, Next.js, React.js, TypeScript.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
