import Navbar from "./scenes/Navbar";
import DotGroup from './scenes/DotGroup'
import Landing from'./scenes/Landing'
import Skills from "./scenes/Skills";
import AboutMe from "./scenes/AboutMe";

import LineGradient from './components/LineGradient'
import useMediaQuery from './hooks/useMediaQuery'
import { useState, useEffect } from "react"


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
        <Landing
          setSelectedPage={setSelectedPage}
        />
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full" >
          <AboutMe/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full" >
          <Skills/>
      </div>
    </div>


  )
}

export default App;
