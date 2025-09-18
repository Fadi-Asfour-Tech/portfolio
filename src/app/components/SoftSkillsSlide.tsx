"use client"
import React from 'react'
import { CiStar } from "react-icons/ci";
import { PiStarFourFill } from "react-icons/pi";

const softSkills = [
    "Teaching Skills",
    "Time Management",
    "Public Speaking",
    "Team Leadership",
    "Problem Solving",
    "Team Collaboration",
    "Creativity",    
]

const SoftSkillsSlide: React.FC = () => {
  return (
    <div aria-hidden="true" className="bg-dark w-full overflow-hidden -rotate-3 mt-10 py-5">
      <div className="bg-secondary py-1">
        <ul className="flex animate-slide whitespace-nowrap items-center">
          {
            [...softSkills, ...softSkills].map((skill, index) => (
              <div key={index} className="inline-flex items-center text-white font-semibold text-lg mx-4">
                <li className="inline-block">{skill}</li>
                <PiStarFourFill  className="mx-2 text- w-6 text-primary" />
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default SoftSkillsSlide;
