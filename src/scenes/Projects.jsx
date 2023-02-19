import { motion } from "framer-motion"
import LineGradient from "../components/LineGradient"

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectV = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title, subtitle, path }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase()
    const overlayer = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-pink z-30 flex flex-col justify-center items-center text-center p-16 text-deep-purple`;
    return (
        <motion.div
            variants={projectV}
            className="relative"
        >
            <a href={path} target="_blank" rel="noopener noreferrer">
                <div className={overlayer}>
                    <p className="text-2xl font-source-code" >{projectTitle}</p>
                    <p className="mt-7 text-center" >
                        {subtitle}
                    </p>
                </div>
            </a>
            <img src={require(`../assets/${projectTitle}.jpeg`)} alt={`${title} logo`} />
        </motion.div>
    )
}

const Projects = () => {

    return (
        <section id="projects" className="py-48" >
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
                        {`<projects/>`}
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Projects are an important way to improve your habilities as a dev. Feel free to visit my GitHub page and check out my repositories!
                </p>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                    className="sm:grid sm:grid-cols-3"
                >
                    <div className="flex justify-center text-center items-center p-10 bg-pink-two max-w-[400px] max-h-[400px] text-2xl font-semibold font-source-code ">
                        usefull and responsive interfaces
                    </div>
                    <Project title="Arte de Caderno" subtitle="Creating a portal with two other students for a project developed inside the College. We are still building it, using ReactJS for the front-end and Node.js for the back-end" path="https://github.com/BeatrizNeaime/Arte-de-Caderno-Backup" />

                    <Project title="BR finanças" subtitle="A finance controller named BR Finanças. Technologies used: HandleBars, NodeJS and MySQL." path="https://github.com/BeatrizNeaime/BR-financas" />

                    <Project title="Patinhas Felizes" subtitle="A menagement system for a fictitious animal shelter, where the workers can manage animal adoptions and donations. Technologies used: Handlebars, NodeJS and MySQL." path="https://github.com/BeatrizNeaime/PatinhasFelizes" />

                    <Project title="Advice" subtitle="In case you need an advice today... built with Advice Slip API" path="https://imaginative-paletas-b1d609.netlify.app" />

                    <Project title="Splitter" subtitle="Application to calc the bill value per person. You need to input hte bill, the tip value and the number of people, and voilá!" path="https://fm-tip-calculator-pi.vercel.app" />

                </motion.div>
            </div>

        </section>
    )
}

export default Projects