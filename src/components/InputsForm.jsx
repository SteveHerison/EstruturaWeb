import PropTypes from "prop-types";

const InputsForm = ({
  id,
  type,
  value,
  placeholder,
  setValue,
  label,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="flex flex-col my-2">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...rest}
          className="p-2 rounded-xl border outline-none"
        />
      </label>
    </div>
  );
};

InputsForm.propTypes = {
  id: PropTypes.string.isRequired, // Valide a propriedade id
  type: PropTypes.string.isRequired, // Valide a propriedade type
  value: PropTypes.any.isRequired, // Valide a propriedade value
  placeholder: PropTypes.string.isRequired, // Valide a propriedade placeholder
  setValue: PropTypes.func.isRequired, // Valide a propriedade setValue
  label: PropTypes.string.isRequired, // Valide a propriedade label
};

export default InputsForm;
