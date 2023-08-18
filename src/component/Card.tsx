import { CardInterface } from "../interface/card.interface";

const Card = (props: CardInterface) => {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
};

export default Card;
