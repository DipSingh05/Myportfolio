
import { projects } from "../PortfolioData";
import ProjectCard from "./Projectcard";
const Project = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

<div className="flex justify-center -translate-y-[1px]">
  <div className="w-3/4">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
  </div>
</div>

<div className="flex justify-center my-5 lg:py-8">
  <div className="flex  items-center">
  <h1 className="text-center text-4xl text-primary font-semibold">
  PROJECTS
</h1>
  </div>
</div>
        <div className="pt-12">
          <div className="flex flex-col gap-6">
            {projects.slice(0, 4).map((items, index) => (
              <div
                id={`sticky-card-${index + 1}`}
                key={index}
                className="sticky-card w-full sticky"
              >
                <div className="box-border w-full flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  <ProjectCard
                    key={items.name}
                    name={items.name}
                    image={items.image}
                    techStack={items.stack}
                    description={items.description}
                    github={items.sourceCode}
                    live={items.livePreview}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  );
};
export default Project;
