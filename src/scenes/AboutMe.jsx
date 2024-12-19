import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { technologies } from "../utils/tech";
import { texts } from "./../utils/texts";

const AboutMe = ({ language }) => {
  const mediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="md:pt-10 pb-24 min-h-screen" id="about">
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
          <p className="font-poppins font-semibold text-4xl mb-5">
            {texts[language].about.title}
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            {texts[language].about.text}
            <a
              className="text-pink-two font-bold"
              href={texts[language].about.link}
              target="_blank" rel=""
            >
              {texts[language].about.empresa}
            </a>{" "}
            {texts[language].about.text2}
          </p>
          <div className="flex gap-6 flex-wrap">
            {technologies.map((tech, index) => {
              return (
                <div className="flex justify-evenly" key={index}>
                  <span className="text-purple mx-1">&#10148;</span>
                  <p>{tech}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {mediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-3xl
            before:w-full before:max-w-[400] md:before:max-w-[400] before:h-full before:border-2 before:border-purple before:z-[-1]"
            >
              <img
                alt="profile photo"
                className="z-10 max-w-sm rounded-3xl shadow-xl"
                src={require("../assets/group.jpg")}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
