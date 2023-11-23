const LineGradient = ({ width = "w-5/6" }) => {
  return (
    <div className="w-full flex items-center justify-center mt-3">
      <div className={`h-0.5 ${width} bg-gradient-rainbow`} />
    </div>
  );
};

export default LineGradient;
