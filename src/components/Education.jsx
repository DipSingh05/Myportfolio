// @flow strict
import { educations } from "../PortfolioData";
import { BsCalendar2Event} from "react-icons/bs";
import AnimationLottie from "../helper/animation-lottie";
import lottieFile from '/public/lottie/study.json';
import GlowCard from "../helper/glow-card";

const Education = () => {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
  <div className="flex  items-center">
  <h1 className="text-center text-4xl text-primary font-semibold">
  EDUCATION
</h1>
  </div>
</div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <div className="flex justify-center align-items-center gap-2">
                        <BsCalendar2Event className="pt-1"/>
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center justyify-between gap-x-8 px-3 py-5">
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.subject}
                          </p>
                          <p className="text-sm sm:text-base"><span className="text-[#16f2b3]">{education.institution}</span> , <span>{education.location}</span>
                          </p>
                        </div>
                        <div className="text-center border-l-2 px-6">
                          <h6>CGPA</h6>
                          <span className="text-[#16f2b3]">{education.grade}</span> / 10.0                
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;