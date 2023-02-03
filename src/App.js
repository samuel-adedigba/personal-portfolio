import Navbar from "./scenes/Navbar";
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import Skills from "./scenes/Skills";
import AboutMe from "./scenes/AboutMe";
import Projects from './scenes/Projects'
import Contact from "./scenes/Contact";

import LineGradient from './components/LineGradient'
import useMediaQuery from './hooks/useMediaQuery'

import { useState, useEffect } from "react"
import { motion } from "framer-motion";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [topOfPage, setTopOfPage] = useState(true);
  const mediumScreens = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true)
      } else {
        setTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="app bg-deep-purple">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        topOfPage={topOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full" >
        {mediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutMe />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

    </div>
  )
}

export default App;
