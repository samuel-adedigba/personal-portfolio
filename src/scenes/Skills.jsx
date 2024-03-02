import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { texts } from "../utils/texts";

const Skills = ({language}) => {
  return (
    <section id="skills" className="pt-10 pb-24 min-h-screen">
      <div className="md:flex md:justify-between md:gap-16 mt-32 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:w-1/3"
        >
          <div>
            <p className="font-poppins font-semibold text-4xl">{texts[language].skills.title}</p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            {texts[language].skills.text}
          </p>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">01</p>
              <p className="font-source-code font-semibold text-3xl mt-3">
                {texts[language].skills[1].title}
              </p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-purple absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            {texts[language].skills[1].text}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">02</p>
              <p className="font-source-code font-semibold text-3xl mt-3">
                {texts[language].skills[2].title}
              </p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-pink-two absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            {texts[language].skills[2].text}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" md:w-1/3 mt-10"
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-source-code font-semibold text-5xl">03</p>
              <p className="font-source-code font-semibold text-3xl mt-3">
                {texts[language].skills[3].title}
              </p>
            </div>
            <div className="w-1/2  md:w-3/4 bg-blue absolute right-0 top-0 z-[-1]">
              <br />
            </div>
          </div>
          <p className="mt-5">
            {texts[language].skills[3].text}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
