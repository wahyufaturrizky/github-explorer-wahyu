import { CardInterface } from "../interface/card.interface";

const Card = (props: CardInterface) => {
  const { children, className } = props;

  return (
    <div data-testid="card" className={className}>
      {children}
    </div>
  );
};

export default Card;
