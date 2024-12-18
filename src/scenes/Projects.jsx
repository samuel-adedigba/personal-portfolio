import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Project from "../components/Project";
import { projects } from "../utils/projects";
import { texts } from "../utils/texts";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = ({ language }) => {
  return (
    <section id="projects" className="py-48 min-h-screen">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-poppins font-semibold text-4xl">
            {texts[language].projects.title}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">{texts[language].projects.text}</p>
      </motion.div>

      <div className="flex justify-center gap-2 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
          className="flex flex-col gap-5 w-full items-center justify-center"
        >
          {/* idk why foreach/map is not working */}
          <Project project={projects[0]} language={language} />
          <Project project={projects[1]} language={language} />
          {/* <Project project={projects[2]} language={language} />
          <Project project={projects[3]} language={language} /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
