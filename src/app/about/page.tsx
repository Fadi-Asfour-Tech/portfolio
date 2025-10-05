"use client";
import Button from "@/general_components/Button";
import { DiTerminal } from "react-icons/di";
import { FaDownload } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";

import SoftSkillsSlide from "../components/SoftSkillsSlide";

const About = () => {
  return (
    <section id="about">
      <div className="container max-w-7xl  mx-auto py-20">
        {/* mx-auto py-20 */}
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <section className="mb-16">
          <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
            {/* I am a software engineer with a passion for Flutter and web
            development. I have a strong experience in building scalable and
            efficient applications using Flutter and web technologies. I am
            always looking for new challenges and opportunities to learn and
            grow as an Engineer. */}
            I am a Software Engineer specializing in mobile and web development
            with Flutter and Next.js, holding a Software Engineering degree from
            Damascus University. With a high experience, I build scalable, high
            performance applications, focusing on clean architecture. I have led
            and contributed to projects like the Freelancing Platform (Kafo) and
            Blind Care Association Apps. Passionate about Agile methodologies
            and innovative problem-solving, I am open to new opportunities in
            Flutter, Next.js and software development.
          </p>
          <div className=" flex items-center justify-center m-1 line ">
            <Button
              classes="border-blue-500 bg-transparent stroke-blue-500 hover:text-white"
              title="Download Resume"
              icon={
                <FaDownload
                  className="ml-1 inline-block text-sm font-bold"
                  width={24}
                  height={24}
                />
              }
              link=""
              // TODO: add link to cv
            />
          </div>
        </section>

        <section className="">
          {/* mb-16 */}
          <h2 className="section-title">Skills</h2>
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
          </div>
        </section>
      </div>
      <div className="h-40 overflow-hidden">
        <SoftSkillsSlide />
      </div>
    </section>
  );
};

export default About;
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
