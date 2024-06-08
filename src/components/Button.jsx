import PropTypes from "prop-types";

const Button = ({ name, ...rest }) => {
  return (
    <button {...rest} className="p-2 rounded-xl bg-black text-white">
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired, // Valide a propriedade name
};

export default Button;
