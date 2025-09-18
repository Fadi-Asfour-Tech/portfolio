"use client";
import Button from "@/general_components/Button";
import { DiTerminal } from "react-icons/di";
import { FaCode, FaDownload } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { MdFlutterDash } from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
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
            I am a software engineer with a passion for Flutter and web
            development. I have a strong experience in building scalable and
            efficient applications using Flutter and web technologies. I am
            always looking for new challenges and opportunities to learn and
            grow as an Engineer.
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
            />
          </div>
        </section>

        <section className="">
          {/* mb-16 */}
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6  hover:border-gray-500 hover:border-3 transition-all">
              <DiTerminal className="h-8  w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Software Engineering
              </h3>
              <ul className="text-secondary space-y-2">
                <li>System analysis</li>
                <li>System Design</li>
                <li>SDLC</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6 hover:border-gray-500 hover:border-3 transition-all">
              <SiFlutter className="h-8  w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flutter</h3>
              <ul className="text-secondary space-y-2">
                <li>State Management</li>
                <li>Flavors</li>
                <li>Device Sensors</li>
              </ul>
            </div>
             <div className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6 hover:border-gray-500 hover:border-3 transition-all">
              <RiNextjsFill  className="h-8  w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Next.js</h3>
              <ul className="text-secondary space-y-2">
                <li>Redux</li>
                <li>Shadcn</li>
                <li>React Query</li>
              </ul>
            </div>
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
