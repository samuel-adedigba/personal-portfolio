import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selected = `relative bg-pink-two before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selected : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selected : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("about")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selected : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selected : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selected : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;