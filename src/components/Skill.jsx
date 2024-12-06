import { useState } from "react";
import { Programming, FrontEnd, BackEnd, Technology, Database } from "../Images";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("Programming");
  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-center my-20 relative z-50 my-12 lg:my-24" id="skills">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

<div className="flex justify-center -translate-y-[1px]">
  <div className="w-3/4">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
  </div>
</div>

<div className="flex justify-center my-5 lg:py-8">
  <div className="flex  items-center">
  <h1 className="text-center text-4xl text-primary font-semibold">
  SKILLS
</h1>
  </div>
</div>
      <div role="tablist" className="tabs tabs-boxed mt-10 w-full sm:w-1/2 mx-auto scroll-container ">
        <a
          role="tab"
          className={`tab ${activeTab === "Programming" ? "tab-active" : ""}`}
          onClick={() => handleToggle("Programming")}
        >
          Programming
        </a>

        <a
          role="tab"
          className={`tab ${activeTab === "FrontEnd" ? "tab-active" : ""}`}
          onClick={() => handleToggle("FrontEnd")}
        >
          FrontEnd
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "BackEnd" ? "tab-active" : ""}`}
          onClick={() => handleToggle("BackEnd")}
        >
          BackEnd
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Database" ? "tab-active" : ""}`}
          onClick={() => handleToggle("Database")}
        >
          Databases
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Technologies" ? "tab-active" : ""}`}
          onClick={() => handleToggle("Technologies")}
        >
          Technologies
        </a>
      </div>

      {/* Programming Tab */}
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10 ">
        {activeTab === "Programming" &&
          Programming.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24 bg-white hover:bg-white hover:border-4 hover:border-[#ff865b]" // Prevent background color change
            />
          ))}
      </div>

      {/* FrontEnd Tab */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "FrontEnd" &&
          FrontEnd.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn w-24 h-24 object-contain bg-white hover:bg-white hover:border-4 hover:border-[#ff865b]" // Prevent background color change
            />
          ))}
      </div>

      {/* BackEnd Tab */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "BackEnd" &&
          BackEnd.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24 bg-white hover:bg-white hover:border-4 hover:border-[#ff865b]" // Prevent background color change
            />
          ))}
      </div>

      {/* Database Tab */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "Database" &&
          Database.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24 bg-white hover:bg-white hover:border-4 hover:border-[#ff865b]" // Prevent background color change
            />
          ))}
      </div>

      {/* Technologies Tab */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "Technologies" &&
          Technology.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24 bg-white hover:bg-white hover:border-4 hover:border-[#ff865b]" // Prevent background color change
            />
          ))}
      </div>
    </div>
  );
};

export default Skill;
