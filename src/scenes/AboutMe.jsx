import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"

import { ProgressBar } from "react-bootstrap"

const AboutMe = () => {
    const mediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section className="pt-10 pb-24 h-[100vh]" id="about" >
            <div className="md:flex md:justify-between md:gap-16 mt-32 " >
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
                    <p className="font-poppins font-semibold text-4xl mb-5" >
                        {`<about/>`}
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7" >
                        Hello! My name is Beatriz Neaime, I'm a Computer Engineering student and front-end web developer. I started learning web development during the pandemics, doing online courses to learn the basics and improve my skills, making sure I've learned enough to move on and try the newest technologies. Here are some technologies I'm acquainted:
                    </p>
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>HTML</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>CSS</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>JavaScript</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>ReactJS</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>MySQL</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>Node.js</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>React Native</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>Next.js</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>Typescript</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>Styled-Components</p>
                        </div>
                        <div className="flex justify-evenly">
                            <span className="text-purple mx-1" >&#10148;</span>
                            <p>WordPress</p>
                        </div>
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
                                className="z-10 max-w-[400] "
                                src={require("../assets/profile2.png")}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutMe