import { ButtonInterface } from "../interface/button.interface";

const Button = (props: ButtonInterface) => {
  const { label, type, className } = props;

  return (
    <button type={type} className={className}>
      {label || "Text goes here"}
    </button>
  );
};

export default Button;
