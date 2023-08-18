import { TextInterface } from "../interface/text.interface";

const Text = (props: TextInterface) => {
  const { label, className } = props;

  return <p className={className}>{label || "Text goes here"}</p>;
};

export default Text;
