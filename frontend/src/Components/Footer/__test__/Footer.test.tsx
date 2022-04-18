import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("should check number or links", () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(9);
  });

  it("should check number of elements on listitem", () => {
    render(<Footer />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(4);
  });

  it("should if the text changes in input", () => {
    render(<Footer />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Email Address/i);
    fireEvent.change(inputElement, { target: { value: "test@asd.com" } });
    expect(inputElement.value).toBe("test@asd.com");
  });

  it("should border of input be as needed", () => {
    render(<Footer />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Email Address/i);
    fireEvent.change(inputElement, { target: { value: "test@asd.com" } });
    expect(inputElement).toHaveStyle(" border: 1px solid #d6d6d6;");
  });

  it("should check if button text is right", () => {
    render(<Footer />);
    const buttonElements = screen.getByRole("button");
    expect(buttonElements).toHaveTextContent(`>`);
  });

  it("should text of subscribe", () => {
    render(<Footer />);
    const textElements = screen.getByText("Subscribe to our Newsletter");
    expect(textElements).toHaveTextContent("Subscribe to our Newsletter");
  });

  it("should copyright text to be in black color", () => {
    render(<Footer />);
    const textElements = screen.getByText("Copyright © 2022 to Hiker");
    expect(textElements).toHaveStyle(" color: black;");
  });
});
