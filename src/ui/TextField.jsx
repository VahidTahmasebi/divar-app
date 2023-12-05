import { CiSearch } from "react-icons/ci";

const TextField = ({ name, placeholder, className }) => {
  return (
    <div className="h-full relative flex items-center">
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        maxLength={20}
        className={`${className} pr-11 textField__input`}
      />
      <span className="absolute right-3">
        <CiSearch />
      </span>
    </div>
  );
};

export default TextField;
