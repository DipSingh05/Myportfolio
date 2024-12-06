/* eslint-disable no-unused-vars */
// @flow strict
import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function CertificateCard({ 
  cover_image,
  name,
  issuedate,
  issueby,
  issuerimg,
  platform,
  description,
  marks,
  url
}) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-base-100 to-[#0a0d37] shadow-xl my-2 mx-2 w-full hover:scale-95 transition-transform duration-300 ease-in-out group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={cover_image}
          height={1080}
          width={1920}
          alt="cover_img"
          className='h-full w-full bg-white group-hover:scale-110 transition-all duration-300 py-2'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{issuedate}</p>
          <div className="flex items-center gap-3">
            <p>{platform}</p>
          </div>
        </div>
        <a target='_blank' href={url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {name} | {marks}
          </p>
        </a>
        <p className='mb-2 text-sm text-[#16f2b3] flex items-center gap-1'>
        <img 
        src={issuerimg} 
        height={20}
        width={20}
        alt="issue_img"
        className='group-hover:scale-110 transition-all duration-300'
        />
        <span>{issueby}</span>
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-24 line-clamp-3 font-cyberpunk'>
          {description}
        </p>
        <div className="text-center py-2">
          <a target='_blank' href={url}  rel="noopener noreferrer">
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
            <FaExternalLinkAlt />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

CertificateCard.propTypes = {
  cover_image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  issuedate: PropTypes.string.isRequired,
  issueby: PropTypes.string.isRequired,
  issuerimg:PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  marks: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default CertificateCard;