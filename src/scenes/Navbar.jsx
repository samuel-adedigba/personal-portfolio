import { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'


import useMediaQuery from '../hooks/useMediaQuery'

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerPage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${selectedPage === lowerPage ? "text-pink-two" : "text-pink"}
        hover:text-light-pink transition duration-500 
      `} 
      href={`#${lowerPage}`}
      onClick={() => { setSelectedPage(lowerPage) }}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ topOfPage, selectedPage, setSelectedPage }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const desktop = useMediaQuery("(min-width: 768px)");
  const navBackground = topOfPage ? "" : "bg-purple"
  return (
    <nav className={` ${navBackground} z-40 w-full fixed top-0 py-6`}  >
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <h4 className="font-poppins text-3xl font-bold"> {`<BN/>`} </h4>

        {/* DESKTOP */}
        {desktop ? (
          <div className="flex justify-between gap-16  font-source-code text-sm font-semibold">
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="about"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button className={`rounded-full bg-purple p-2`}
            onClick={
              () => {
                setMenuToggled(!menuToggled)
              }
            }
          >
            <AiOutlineMenu />
          </button>
        )}

        {/* MOBILE */}

        {!desktop && menuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-light-purple w-[250px] opacity-85 ">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setMenuToggled(!menuToggled)}>
                <AiOutlineCloseCircle />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue justify-center ">
              <Link
                page="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="about"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}

      </div>
    </nav >
  )
}

export default Navbar