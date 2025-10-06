"use client";
import { DiTerminal } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SoftSkillsSlide from "../components/SoftSkillsSlide";

 const SkillsSection = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section id="skills">
      <div className="container max-w-7xl  mx-auto py-20">
        {/* mx-auto py-20 */}
        {/* <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1> */}
        <motion.div
          ref={refHeading}
          variants={variants1}
          initial="initial"
          animate={inViewHeading ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
            Skills
          </h3>
          <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
        </motion.div>

        <section className="">
          {/* mb-16 */}
          {/* <h2 className="section-title">Skills</h2> */}

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {technicalSkill(
              "Software Engineering",
              ["System analysis", "System Design", "SDLC"],
              <DiTerminal size={24} />
            )}
            {technicalSkill(
              "Flutter",
              [
                "State Management",
                "Flavors",
                "Device Sensors",
                "Clean architecture",
              ],
              <SiFlutter size={24} />
            )}
            {technicalSkill(
              "Next.js",
              ["Redux", "Shadcn", "React Query"],
              <RiNextjsFill size={24} />
            )}
            {technicalSkill(
              "Project Management",
              ["Waterfall methodology", "Agile methodology"],
              <MdManageAccounts size={24} />
            )}
            {technicalSkill(
              "Version Control - Git",
              ["GitHub", "GitLab", "Gitea"],
              <FaGitAlt size={24} />
            )}
          </div>
        </section>
      </div>
      <div className="h-40 overflow-hidden">
        <SoftSkillsSlide />
      </div>
    </section>
  );
};

export default SkillsSection;
function technicalSkill(
  header: string,
  elements: string[],
  icon: React.ReactNode
) {
  return (
    <div className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6 hover:border-gray-500 hover:border-3 transition-all">
      <div className=" text-primary mb-1">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{header}</h3>
      <ul className="text-secondary space-y-2">
        {elements?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
