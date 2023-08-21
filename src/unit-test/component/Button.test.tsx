import { render, screen } from "@testing-library/react";
import Button from "../../component/Button";
import { ButtonInterface } from "../../interface/button.interface";

describe("Button component", () => {
  it("renders button correctly", () => {
    const props: ButtonInterface = {
      type: "button",
      className: "string",
      label: "string",
    };

    render(<Button {...props} />);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });
});
