import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { about } from "../PortfolioData";
import Typewriter from "typewriter-effect";
import ProgressChart from "./ProgressChart";

const Hero = () => {
  const { name, role, description, resume, social, profession, experience, phone, email, address} = about;

  return (
   <>
   
   <div className="text-center grid content-center py-6 lg:py-4">
    <h1 className="py-2 text-6xl font-bold">
        I am <span className="color-sunset">{name}</span>
      </h1>
    <h2 className="text-2xl sm:text-3xl pt-6 font-semibold font-cyberpunk">
      <Typewriter
        options={{
          strings: role,
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
    </div>

    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

<div className="flex justify-center -translate-y-[1px]">
  <div className="w-3/4">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
  </div>
</div>

    <div className="hero min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] relative">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-2">
        {/* Left Section: Image */}
        <div className="flex justify-center">
          <img
            src="/dip.jpg"
            alt="Hero"
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>

      <div className="text-center mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold py-2 leading-relaxed">
          Hello, <span className="wave">👋</span>
          <br />
        </h2>
        <p className="py-6 sm:text-xl text-start font-cyberpunk">{description}</p>
        <div className="flex justify-center items-center space-x-4">
          
          <div className="flex justify-center">
        <a
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href={resume}
            target="_blank"
            rel="noopener noreferrer"
        >
          <span className="pe-2">Resume</span>
          <FaDownload size={16} />
        </a>
      </div>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xl hover:bg-white"
          >
            <FaGithub />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xl hover:bg-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>


      <div className="rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-white p-6 shadow-lg">
          <div className="flex flex-row space-x-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-6">
  <code className="font-mono text-xs md:text-sm lg:text-base">
    <div className="blink">
      <span className="mr-2 text-pink-500">const</span>
      <span className="mr-2 text-white">coder</span>
      <span className="mr-2 text-pink-500">=</span>
      <span className="text-gray-400">{'{'}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">Name:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">{name}</span>
      <span className="text-gray-400">{`',`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">Language:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">{`["Bengali", "Hindi", "English"]`}</span>
      <span className="text-gray-400">{`',`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">Profession:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">{profession}</span>
      <span className="text-gray-400">{`',`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">Experience:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">{experience}</span>
      <span className="text-gray-400">{`',`}</span>
    </div>
    <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">Skills:</span>
                <span className="text-amber-300">{`["Python", "Java", "React", "NextJS", "Redux", "Express", "MySql", "MongoDB", "JWT"]`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">Contacts:</span>
      <span className="text-gray-400">{'['}</span>
    </div>
    <div className="ml-8 lg:ml-16">
      <span className="text-gray-400">{`{`}</span>
      <span className="ml-4 text-white">Address:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">{address}</span>
      <span className="text-gray-400">{`',`}</span>
      <span className="ml-4 text-white">Phone:</span>
      <span className="text-gray-400">{`'`}</span>
      <a type="phone" href="telto:+919749027688"><span className="text-amber-300">{phone}</span></a>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-gray-400">{`},`}</span>
    </div>
    <div className="ml-8 lg:ml-16">
      <span className="text-gray-400">{`{`}</span>
      <span className="ml-4 text-white">Email:</span>
      <span className="text-gray-400">{`'`}</span>
      <a type="email" href="mailto:diptomansingh.personal@gmail.com"><span className="text-amber-300">{email}</span></a>
      <span className="text-gray-400">{`},`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 text-gray-400">{`]`}</span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-green-400">Hireable:</span>
      <span className="text-orange-400">function</span>
      <span className="text-gray-400">{'() {'}</span>
    </div>
    <div>
      <span className="ml-8 lg:ml-16 text-orange-400">return</span>
      <span className="text-amber-300">
        (this.hardWorker &amp;&amp; this.problemSolver &amp;&amp; this.skills.length &gt;= 5);
      </span>
    </div>
    <div>
      <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
    </div>
    <div>
      <span className="text-gray-400">{`};`}</span>
    </div>
  </code>
</div>

        </div>

      <div>
        <ProgressChart />
      </div>
      </div>
    </div>
   
   
   </>
  );
};

export default Hero;
