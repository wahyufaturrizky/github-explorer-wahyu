import { AccordionInterface } from "../interface/accordion.interface";
import { ReactComponent as ExpandIcon } from "../assets/expand_more.svg";
import Text from "./Text";

const Accordion = (props: AccordionInterface) => {
  const { labelHeader, children, classBody } = props;

  return (
    <div>
      <div className="bg-light-gray px-2 py-0 rounded justify-between flex items-center	hover:opacity-40 cursor-pointer">
        <Text label={labelHeader || "Text goes here"} />
        <ExpandIcon />
      </div>

      <div className={classBody}>{children}</div>
    </div>
  );
};

export default Accordion;
