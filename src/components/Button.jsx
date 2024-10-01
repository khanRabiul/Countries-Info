const Button = ({ onClick, text }) => {
    return (
      <button
        onClick={onClick}
        className={
          "px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mx-2"
        }
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  