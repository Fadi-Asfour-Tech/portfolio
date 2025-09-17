"use client";
import { DiTerminal } from "react-icons/di";
import { FaCode } from "react-icons/fa";

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
        </section>
        <section className="">
          {/* mb-16 */}
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6  hover:border-gray-500 hover:border-3 transition-all">
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
            <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:border-gray-500 hover:border-3 transition-all">
              <FaCode className="h-8  w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flutter</h3>
              <ul className="text-secondary space-y-2">
                <li>Flutter</li>
                <li>State Management</li>
                <li>Flavors</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
