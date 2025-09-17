"use client";
import {
  fadeInDown,
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Ballpit from "./background";

const Hero = () => {
  return (
    <section
      // style={{
      //   backgroundImage: "url('/gifBackground.gif')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      id="home"
    >
      <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={50}
    gravity={0.1}
    friction={0.9}
    wallBounce={0.95}
    followCursor={true}
    ambientColor={16777215}
    
  />

      <div className="relative py-28 container max-w-7xl mx-auto px-4">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              {...scaleIn}
              transition={{ delay: 0.05 }}
              className="flex flex-col items-center"
            >
              <div>
                <Image
                  src="/fadi.jpg"
                  alt="Profile Image"
                  width={200}
                  height={200}
                  className="rounded-full mb-4 w-50 h-50 object-cover ring-3 ring-primary"
                />
              </div>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                //   className="text-4xl md:text-6xl font-bold text-primary mb-4"
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Welcome!
                <span className="text-primary"> Fadi Asfour Here!</span>
              </motion.h1>
            </motion.div>
            <motion.p
              {...fadeInDown}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Software Engineer & Flutter Developer
            </motion.p>
            <motion.div
              {...slideInRight}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-4 mb-8"
            >
              <Link
                href="https://github.com/Fadi-Asfour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fadi-asfour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://wa.me/+963936778940"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaWhatsapp />
              </Link>
            </motion.div>
            <motion.div
              {...slideInLeft}
              transition={{ delay: 1 }}
              className="flex flex-col md:flex-row justify-center gap-4"
            >
              <Link
                href="#projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Hero;
