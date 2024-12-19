import { motion } from "framer-motion";
import useMediaQuery from "./../hooks/useMediaQuery";
import { FaGithub, FaEye } from "react-icons/fa";
import HubDashboard from '../assets/projects/hub-dashboard.png'
import Landing from '../assets/projects/Landing_page.png'

const projectV = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const images = {
  // "arte": arte,
  // "br-finanças": brF,
  // "advice": advice,
  // "splitter": splitter,
  // "patinhas-felizes": patinhas,
  "Hub_Dashboard": HubDashboard,
  "Landing_page": Landing,
}

const Project = ({ project, language }) => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <motion.div variants={projectV} className="relative">
      {desktop ? (
        <div className="flex bg-light-pink text-black rounded-md">
          <div className="w-1/2">
            <img src={images[project.img]} alt={project.title} />
          </div>
          <div className="flex flex-col items-start p-4 gap-4 w-1/2">
            <p className="font-source-code font-semibold text-2xl">
              {project.title}
            </p>
            <div className="flex justify-between mt-5">
              {project.subtitle[language]}
            </div>
            <div className="flex gap-4">
              {project.technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="bg-pink-two text-white rounded-md px-2 py-1"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple hover:bg-deep-purple transition duration-200 text-white rounded-md px-2 py-1 flex items-center gap-1"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.path && (
                <a
                  href={project.path}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple hover:bg-deep-purple transition duration-200 text-white rounded-md px-2 py-1 flex items-center gap-1"
                >
                  <FaEye />
                  Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white text-black rounded-md">
          <img src={images[project.img]} alt={project.title} />
          <div className="flex flex-col items-start p-4 gap-4">
            <p className="font-source-code font-semibold text-2xl">
              {project.title}
            </p>
            <div className="flex justify-between mt-5">
              {project.subtitle[language]}
            </div>
            <div className="flex gap-4">
              {project.technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="bg-pink-two text-white rounded-md px-2 py-1"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple hover:bg-deep-purple transition duration-200 text-white rounded-md px-2 py-1 flex items-center gap-1"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.path && (
                <a
                  href={project.path}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple hover:bg-deep-purple transition duration-200 text-white rounded-md px-2 py-1 flex items-center gap-1"
                >
                  <FaEye />
                  Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Project;
