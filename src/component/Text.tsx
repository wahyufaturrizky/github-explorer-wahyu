import { TextInterface } from "../interface/text.interface";

const Text = (props: TextInterface) => {
  const { label, className, onClick } = props;

  return (
    <p data-testid="text" onClick={onClick} className={className}>
      {label || "Text goes here"}
    </p>
  );
};

export default Text;
