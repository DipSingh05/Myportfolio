/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// Importing data from JSON file
import { progress } from "../PortfolioData";

const ProgressChart = () => {
  // Use data from JSON as initial state
  const [progressData, setProgressData] = useState(progress);

  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold">SOFT SKILLS</h1>
      {progressData.map((data, index) => (
        <div key={index} className="w-full flex flex-col items-start gap-1">
          {/* Title */}
          <div className="flex justify-between w-full">
          <span className="text-sm font-medium font-cyberpunk">{data.title}</span>
          <span className="text-sm font-medium font-cyberpunk">{data.level}</span>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <progress
              className="progress progress-error w-full"
              value={data.value}
              max="100"
            ></progress>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ProgressChart;
