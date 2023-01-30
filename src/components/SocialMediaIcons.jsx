import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-centermd:justify-start my-10 gap-7" >
      <a href="https://www.linkedin.com/in/beatriz-neaime-1564b51b1/"
        className="hover:opacity-50 transition duration-500 "
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BeatrizNeaime"
        className="hover:opacity-50 transition duration-500 "
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/bianeaime/"
        className="hover:opacity-50 transition duration-500 "
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram/>
      </a>
    </div>
  )
}

export default SocialMediaIcons