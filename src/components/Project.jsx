import { motion } from "framer-motion";
import { FaRegEye, FaGithub } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";

const projectV = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  subtitle,
  path,
  technologies,
  img,
  language,
  git,
}) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const desktop = useMediaQuery("(min-width: 768px)");

  if (desktop) {
    return (
      <motion.div variants={projectV} className="relative">
        <div className="flex gap-4 bg-white text-black rounded-md p-4 w-full  ">
          <div className="w-1/2 md:w-full h-full ">
            <img
              src={require(`../assets/${projectTitle}.jpeg`)}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start h-full gap-2 mt-5 relative ">
            <p className="text-3xl font-source-code font-bold">{title}</p>
            <p className="text-lg font-poppins">{subtitle}</p>
            <p className="text-lg font-poppins">Stacks:</p>
            <div className="flex gap-2">
              {technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="bg-pink-two text-white font-poppins rounded-md p-2"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {git && (
                <a
                  href={git}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple flex items-center gap-2 text-white font-poppins rounded-md p-2 transition duration-500 hover:bg-deep-purple cursor-pointer"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {path && (
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple flex items-center gap-2 text-white font-poppins rounded-md p-2  transition duration-500 hover:bg-deep-purple"
                >
                  <FaRegEye />
                  Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div variants={projectV} className="relative">
        <div className="flex gap-4 bg-white text-black rounded-md p-4 w-full flex-col">
          <div className="w-full h-full ">
            <img
              src={require(`../assets/${projectTitle}.jpeg`)}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col items-start h-full gap-2 mt-5 relative ">
            <p className="text-3xl font-source-code font-bold">{title}</p>
            <p className="text-lg font-poppins">{subtitle}</p>
            <p className="text-lg font-poppins">Stacks:</p>
            <div className="flex gap-2">
              {technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="bg-pink-two text-white font-poppins rounded-md p-2"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              {git && (
                <a
                  href={git}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple flex items-center gap-2 text-white font-poppins rounded-md p-2 transition duration-500 hover:bg-deep-purple cursor-pointer"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {path && (
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple flex items-center gap-2 text-white font-poppins rounded-md p-2  transition duration-500 hover:bg-deep-purple"
                >
                  <FaRegEye />
                  Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
};

export default Project;
