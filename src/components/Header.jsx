// import DarkModeToggle from "./DarkModeToggle";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between py-8 sm:py-8">
      <h1 className="text-3xl color-sunset font-semibold">DS</h1>
      <ul className="gap-5 hidden text-xl sm:flex">
        
      <a
          href="#education"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Education</li>
        </a>
        <a
          href="#projects"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Projects</li>
        </a>
        <a
          href="#skills"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Skills</li>
        </a>
        <a
          href="#certificate"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Certificates</li>
        </a>
        <a
          href="#contact"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ThemeToggle />
      {/* <DarkModeToggle /> */}
    </div>
  );
};
export default Header;
