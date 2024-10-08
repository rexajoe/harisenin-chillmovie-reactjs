import PropTypes from "prop-types";

const CustomInput = ({ placeholder, type = "", className = "" }) => {
  return (
    <input
      type={`${type}`}
      placeholder={placeholder}
      className={`w-full p-2 mt-1 pl-5 rounded-3xl bg-black opacity-70 outline outline-[1px] outline-[#E7E3FC3B] text-base ${className}`}
    />
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default CustomInput;
