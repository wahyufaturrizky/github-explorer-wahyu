import { render, screen } from "@testing-library/react";
import Input from "../../component/Input";
import { InputInterface, Inputs } from "../../interface/input.interface";
import { KeyboardEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

describe("Input component", () => {
  it("renders input correctly", () => {
    const props: InputInterface = {
      type: "string",
      onKeyPress: jest.fn(),
      className: "string",
      label: "string",
      placeholder: "string",
      required: false,
      register: jest.fn(),
    };

    render(<Input {...props} />);
    const linkElement = screen.getByTestId("input");
    expect(linkElement).toBeInTheDocument();
  });
});
