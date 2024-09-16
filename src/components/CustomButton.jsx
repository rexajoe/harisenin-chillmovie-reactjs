import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ label, icon, className = "", to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full p-2 mt-1 rounded-3xl bg-black outline outline-[1px] outline-[#E7E3FC3B] text-white text-center ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="absolute left-[100px] transform -translate-y-[-5px] w-4 h-4"
        />
      )}
      <span>{label}</span>
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
};

export default CustomButton;
