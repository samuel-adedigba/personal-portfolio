import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoLanguageOutline } from "react-icons/io5";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Link = ({
  label,
  page,
  selectedPage,
  setSelectedPage,
  setMenuToggled,
}) => {
  const lowerPage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerPage ? "text-pink-two" : "text-pink"}
        hover:text-light-pink transition duration-500 
      `}
      href={`#${lowerPage}`}
      onClick={() => {
        setSelectedPage(lowerPage);
        setTimeout(() => {
          setMenuToggled(false);
        }, 300);
      }}
    >
      {label}
    </AnchorLink>
  );
};

const Navbar = ({
  topOfPage,
  selectedPage,
  setSelectedPage,
  language,
  setLanguage,
}) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const [translateMenu, setTranslateMenu] = useState(false);
  const desktop = useMediaQuery("(min-width: 768px)");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslateMenu(false);
    setMenuToggled(false);
  };

  return (
    <nav className={`bg-deep-purple z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <h4 className="font-poppins text-3xl font-bold"> {`<BN/>`} </h4>

        {/* DESKTOP */}
        {desktop ? (
          <div className="flex justify-between items-center gap-16  font-source-code text-sm font-semibold">
            <Link
              page="home"
              label={language === "pt" ? "início" : "home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="about"
              label={language === "pt" ? "sobre" : "about"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="skills"
              label={language === "pt" ? "habilidades" : "skills"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="projects"
              label={language === "pt" ? "projetos" : "projects"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="contact"
              label={language === "pt" ? "contato" : "contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <div className="flex flex-col relative">
              <button
                className="rounded-full bg-pink-two p-1"
                onClick={() => setTranslateMenu(!translateMenu)}
              >
                <IoLanguageOutline className="cursor-pointer relative text-white hover:text-white transition duration-300" />
              </button>
              {translateMenu && (
                <div className="absolute top-5 left-2 bg-light-purple px-2 py-1 w-auto">
                  <button
                    className="text-deep-blue"
                    onClick={() => changeLanguage("pt")}
                  >
                    <p
                      className={`font-source-code ${
                        language === "pt" ? "text-pink-two underline" : "text-white"
                      }`}
                    >
                      PT
                    </p>
                  </button>
                  <button
                    className={`text-deep-blue `}
                    onClick={() => changeLanguage("en")}
                  >
                    <p
                      className={`font-source-code ${
                        language === "en" ? "text-pink-two underline" : "text-white"
                      }`}
                    >
                      EN
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            className={`rounded-full bg-purple p-2`}
            onClick={() => {
              setMenuToggled(!menuToggled);
            }}
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
            <div className="flex flex-col gap-10 ml-5 text-2xl text-deep-blue justify-center items-start ">
              <Link
                page="home"
                label={language === "pt" ? "início" : "home"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuToggled={setMenuToggled}
              />
              <Link
                page="about"
                label={language === "pt" ? "sobre" : "about"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuToggled={setMenuToggled}
              />
              <Link
                page="skills"
                label={language === "pt" ? "habilidades" : "skills"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuToggled={setMenuToggled}
              />
              <Link
                page="projects"
                label={language === "pt" ? "projetos" : "projects"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuToggled={setMenuToggled}
              />
              <Link
                page="contact"
                label={language === "pt" ? "contato" : "contact"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuToggled={setMenuToggled}
              />
              <div className="flex flex-col relative">
                <IoLanguageOutline
                  className="cursor-pointer relative hover:text-pink-two"
                  onClick={() => setTranslateMenu(!translateMenu)}
                />
                {translateMenu && (
                  <div className="absolute top-4 bg-light-purple px-2 py-1 w-auto">
                    <button
                      className="text-deep-blue"
                      onClick={() => changeLanguage("pt")}
                    >
                      <p
                        className={`font-source-code ${
                          language === "pt" ? "text-pink-two" : "text-white"
                        }`}
                      >
                        PT
                      </p>
                    </button>
                    <button
                      className={`text-deep-blue ${
                        language === "en" ? "text-pink-two" : "text-white"
                      }`}
                      onClick={() => changeLanguage("en")}
                    >
                      <p
                        className={`font-source-code ${
                          language === "en" ? "text-pink-two" : "text-white"
                        }`}
                      >
                        EN
                      </p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
