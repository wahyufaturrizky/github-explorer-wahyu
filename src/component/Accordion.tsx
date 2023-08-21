import { AccordionInterface } from "../interface/accordion.interface";
import { ReactComponent as ExpandIcon } from "../assets/expand_more.svg";
import { ReactComponent as CollapseIcon } from "../assets/expand_less.svg";
import Text from "./Text";
import { useState } from "react";

const Accordion = (props: AccordionInterface) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const { labelHeader, children, classBody, className } = props;

  return (
    <div data-testid="accordion">
      <div onClick={() => setIsExpand(!isExpand)} className={className}>
        <Text label={labelHeader || "Text goes here"} />
        {isExpand ? <CollapseIcon /> : <ExpandIcon />}
      </div>
      {isExpand && <div className={classBody}>{children}</div>}
    </div>
  );
};

export default Accordion;
