/* eslint-disable no-unused-vars */
// @flow strict

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import * as React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";

function ProjectCard({ 
    name,
    description,
    image,
    techStack,
    github,
    live,}) {

        const [isRevealed, setIsRevealed] = useState(false);

        // Toggle between reveal and reset states
        const handleInteraction = () => {
        setIsRevealed((prev) => !prev);
      };

  return (
    <div
  className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-base-100 to-[#0a0d37] shadow-xl my-2 mx-2 w-full hover:scale-95 transition-transform duration-300 ease-in-out"
  onClick={handleInteraction}
>
  {/* Gradient Divider */}
  <div className="flex flex-row">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
  </div>

  {/* Header */}
  <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
    <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
    </div>
    <p className="text-center ml-3 text-[#16f2b3] text-base text-sm lg:text-xl font-cyberpunk color-sunset">
      {name}
    </p>
  </div>

  {/* Content Section */}
  <div
    className={`grid grid-cols-1 items-center transition-[grid-template-columns,opacity,transform] duration-700 ease-in-out ${
      isRevealed ? "lg:grid-cols-2" : "lg:grid-cols-1"
    }`}
  >
    {/* Figure Section */}
    <figure
      className={`px-4 py-4 transition-[opacity,transform] duration-700 ease-in-out overflow-hidden ${
        isRevealed
          ? "lg:opacity-100 lg:translate-x-0 block"
          : "lg:opacity-0 lg:translate-x-full hidden"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="rounded-xl object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      />
    </figure>

    {/* Card Body Section */}
    <div
      className="card-body justify-center items-center text-center transition-opacity duration-700 ease-in-out"
    >
      <h2 className="card-title text-primary text-3xl mt-5">{name}</h2>
      <h3 className="md:w-4/5 font-cyberpunk">{description}</h3>
      <h4 className="text-primary pb-4">{techStack.join(" , ")}</h4>
      <div className="card-actions">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-circle hover:border-4  hover:border-white">
            <FaGithub />
          </button>
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-circle hover:border-4  hover:border-white">
            <FaExternalLinkAlt />
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  };

export default ProjectCard;