const TextField = ({ name, placeholder, value, onChange, className }) => {
  return (
    <div>
      {/* <label htmlFor={name} className="block mb-2">
        {label}
      </label> */}
      <input
        type="text"
        id={name}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} textField__input`}
      />
    </div>
  );
};

export default TextField;
