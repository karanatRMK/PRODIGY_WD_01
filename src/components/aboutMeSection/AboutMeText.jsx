import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Karan Kumar D, a passionate front-end web developer skilled in React.js, 
        Tailwind CSS, and JavaScript. I focus on building modern, responsive, and user-friendly 
        web interfaces through real-world projects. Constantly exploring full-stack development, 
        I love bringing designs to life with smooth animations, seamless user interactions, and 
        clean layouts.I'm committed to continuous learning, staying updated with the latest technologies,
        and refining my craft through hands-on coding. Beyond development, I find joy in sharing knowledge,
        helping others, and working toward a meaningful career in tech where I can create impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
