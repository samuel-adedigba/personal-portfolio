import { motion } from "framer-motion";
import Tech from "./Tech";

const projectV = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, path, technologies }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const overlayer = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
    bg-pink z-30 flex flex-col justify-start items-start text-center p-16 text-deep-purple gap-3`;
  return (
    <motion.div variants={projectV} className="relative">
      <a href={path} target="_blank" rel="noopener noreferrer">
        <div className={overlayer}>
          <p className="text-3xl font-source-code font-bold ">{title}</p>
          <p className="mt-4 text-left">{subtitle}</p>
          <div className="flex gap-2 w-full">
            {technologies.map((tech, index) => {
              return <Tech key={index} tech={tech} />;
            })}
          </div>
        </div>
      </a>
      <img
        src={require(`../assets/${projectTitle}.jpeg`)}
        alt={`${title} logo`}
      />
    </motion.div>
  );
};

export default Project;
