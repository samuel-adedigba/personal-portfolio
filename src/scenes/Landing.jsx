import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { texts } from "../utils/texts";

const Landing = ({ setSelectedPage, language }) => {
  const largeScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 min-h-screen py-10 "
    >
      <div className="md:w-screen basis-3/5 z-10 mt-20 md:mt-32 flex justify-center md:order-2">
        {largeScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[150px]
                        before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:border-purple before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[350px] rounded-t-[950px] "
              src={require("../assets/profile3.jpg")}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[600px] rounded-top-[150px] "
            src={require("../assets/profile3.jpg")}
          />
        )}
      </div>

      <div className="z-30 md:basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-poppins text-purple z-10 text-center md:text-start">
            {`<Samuel Adedigba/>`}
          </p>

          <p className="mt-10 mb-7 font-source-code text-sm text-center md:text-start">
            {texts[language].landing.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
               hover:text-deep-purple transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            {texts[language].landing.contact}
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-purple hover:text-purple transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              {texts[language].landing.talk}
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
