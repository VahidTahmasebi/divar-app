const TextField = ({ name, placeholder, className }) => {
  return (
    <div>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} textField__input`}
      />
    </div>
  );
};

export default TextField;
