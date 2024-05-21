import { useEffect } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

const Alert = ({ title, text, type }) => {
  useEffect(() => {
    const toast = document.querySelector(".toast");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }, []);

  return (
    <div className="toast show">
      <div className="toast-content">
        {type == "success" && <IoMdCheckmark className="icon" />}
        {type == "error" && <IoMdClose className="icon" />}
        <div className="message">
          <span className="text text-1">{title}</span>
          <span className="text text-2">{text}</span>
        </div>
      </div>
      <div className="progress"></div>
    </div>
  );
};

export default Alert;
