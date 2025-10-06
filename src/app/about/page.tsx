"use client";
import Button from "@/general_components/Button";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const About = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section id="about" className="h-screen pt-20">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center  ps-6  "
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl ">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="container max-w-7xl  mx-auto py-2">
        {/* mx-auto py-20 */}
        {/* <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1> */}

        <section className="mb-16">
          <p className="text-lg font-bold text-secondary max-w-3xl mx-auto text-center">
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
              title="Resume"
              icon={
                // <FaDownload
                //   className="ml-1 inline-block text-sm font-bold"
                //   width={24}
                //   height={24}
                // />
                <FaArrowUpRightFromSquare
                  className="ml-1 inline-block text-sm font-bold"
                  width={24}
                  height={24}
                />
              }
              link="https://drive.google.com/drive/folders/1AzvpWevKJAcfl808RSu4uYeTxj4lw8IH?usp=sharing"
              // TODO: check link to cv
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
