import { InputInterface } from "../interface/input.interface";

const Input = (props: InputInterface) => {
  const {
    label,
    type,
    className,
    placeholder,
    register,
    required,
    onKeyPress,
  } = props;

  return (
    <div data-testid="input">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label || "Text goes here"}
        </label>
      )}

      <input
        placeholder={placeholder}
        type={type}
        onKeyPress={onKeyPress}
        required={required}
        className={className}
        {...register("userName")}
      />
    </div>
  );
};

export default Input;
