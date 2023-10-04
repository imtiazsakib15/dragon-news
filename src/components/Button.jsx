const Button = ({ text, primary }) => {
  return (
    <button
      className={`px-6 py-2 ${
        primary ? "bg-pink-700" : "bg-black"
      } text-white font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
