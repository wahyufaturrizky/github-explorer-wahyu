import { render, screen } from "@testing-library/react";
import Accordion from "../../component/Accordion";
import { AccordionInterface } from "../../interface/accordion.interface";

describe("Accordion component", () => {
  it("renders accordion correctly", () => {
    const props: AccordionInterface = {
      className: "string",
      labelHeader: "string",
      classBody: "string",
      children: jest.fn(),
    };

    render(<Accordion {...props} />);
    const linkElement = screen.getByTestId("accordion");
    expect(linkElement).toBeInTheDocument();
  });
});
