import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = ({ setSelectedPage }) => {
    const largeScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="home" className="md: flex md: justify-between md: items-center md:h-full gap-16 py-10">
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {largeScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-full
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-purple before:z-[-1]"
                    >
                        <img
                            alt="Web development png file"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src={require('../assets/coding.png')}
                        />
                    </div>
                ) : (
                    <img
                        alt="Web development png file"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px] hidden "
                        src={require('../assets/coding.png')}
                    />
                )}
            </div>

            <div className="z-30 basis-2/5 mt-12 md:mt-32" >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start text-pink" >
                        {`<Beatriz Neaime/>`}
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start ">
                        Junior front-end developer.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="flex mt-5 justify-center md:justify-start"
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                </motion.div>
            </div>
        </section >
    )
}

export default Landing