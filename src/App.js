import Navbar from "./scenes/Navbar";
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import Skills from "./scenes/Skills";
import AboutMe from "./scenes/AboutMe";
import Projects from './scenes/Projects'
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import LineGradient from './components/LineGradient'
import useMediaQuery from './hooks/useMediaQuery'

import { useState, useEffect } from "react"
import { motion } from "framer-motion";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [topOfPage, setTopOfPage] = useState(true);
  const [language, setLanguage] = useState("en");
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
        language={language}
        setLanguage={setLanguage}
      />

      <div className="w-5/6 mx-auto" >
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
            language={language}
          />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutMe language={language} />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills language={language} />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects language={language} />
        </motion.div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto" >
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact language={language} />
        </motion.div>
      </div>

      <Footer/>

    </div>
  )
}

export default App;
