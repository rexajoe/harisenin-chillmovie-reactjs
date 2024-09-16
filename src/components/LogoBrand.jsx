import PropTypes from "prop-types";
function LogoBrand({ className = "" }) {
  return (
    <div className={`flex items-center mx-auto justify-center ${className}`}>
      <img
        src="../src/assets/logo-brand.png"
        alt="Logo"
        className="mb-2 w-10 h-9"
      />
      <div style={{ fontFamily: "Londrina Solid" }}>
        <h1 className="text-white text-3xl">CHILL</h1>
      </div>
    </div>
  );
}

LogoBrand.propTypes = {
  className: PropTypes.string,
};
export default LogoBrand;
