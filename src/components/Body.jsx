import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Projects";
import Skill from "./Skill";
import Certificate from "./Certificate";
import Education from "./Education";

const Body = () => {
  return (
    <>
      <Hero />
      <Education />
      <Project />
      <Skill />
      <Certificate />
      <Contact />
    </>
  );
};

export default Body;
