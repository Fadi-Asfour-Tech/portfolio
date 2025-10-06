"use client";
import { projects } from "@/contents/projects";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaCalendarAlt, FaFileVideo, FaGithub } from "react-icons/fa";

const Projects = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className=" container max-w-7xl px-4 mx-auto py-20" id="projects">
      {/*  mx-auto*/}
      {/* <h2 className="text-3xl font-bold mb-12 text-center">
        Important Projects
      </h2> */}
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Important Projects
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-6 hover:scale-110 transition-transform"
          >
            <div className="relative aspect-video mb-4 rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px ) 100vw, (max-width:1200px) 50vw, 33vw"
              ></Image>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2 ">
              <Link
                href={project.projectLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5" /> <span>GitHub</span>
              </Link>
              <Link
                href={project.projectLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaFileVideo className="w-5 h-5" /> <span>Video</span>
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <span className="flex items-center  text-secondary">
                <FaCalendarAlt className="mr-2 " />
                {new Date("2024-03-10").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Projects;
