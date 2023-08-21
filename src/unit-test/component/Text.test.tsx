import { render, screen } from "@testing-library/react";
import Text from "../../component/Text";
import { TextInterface } from "../../interface/text.interface";

describe("Text component", () => {
  it("renders text correctly", () => {
    const props: TextInterface = {
      className: "string",
      label: "string",
      onClick: jest.fn(),
    };

    render(<Text {...props} />);
    const linkElement = screen.getByTestId("text");
    expect(linkElement).toBeInTheDocument();
  });
});
