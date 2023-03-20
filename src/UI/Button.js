const Button = ({children, className, onClick}) => {
  return (
    <button
      className={`px-4 py-2 font-notoSans font-medium text-xs text-white bg-blue-500 rounded-lg mt-7 hover:opacity-95 outline-none transition duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
