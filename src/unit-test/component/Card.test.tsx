import { render, screen } from "@testing-library/react";
import Card from "../../component/Card";
import { CardInterface } from "../../interface/card.interface";

describe("Card component", () => {
  it("renders card correctly", () => {
    const props: CardInterface = {
      className: "string",
      label: "string",
      children: jest.fn(),
    };

    render(<Card {...props} />);
    const linkElement = screen.getByTestId("card");
    expect(linkElement).toBeInTheDocument();
  });
});
