const Tech = ({ tech }) => {
  return (
    <div className="flex flex-row items-center justify-start text-black gap-1 ">
      <span className="text-purple">&#10148;</span>
      <p>{tech}</p>
    </div>
  );
};

export default Tech;
