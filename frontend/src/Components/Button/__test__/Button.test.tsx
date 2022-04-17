import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("should render same text passed into text prop", async () => {
    render(<Button text="Button Text" />);
    const buttonElement = screen.getByText(/Button Text/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render Button by Role", async () => {
    render(<Button text="Button Text" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render Button by title", async () => {
    render(<Button text="Button Text" />);
    const buttonElement = screen.getByTitle("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same text passed into text prop2", async () => {
    render(<Button text="Button Text" />);
    const buttonElement = await screen.findByText(/Button Text/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same text passed into text prop3", async () => {
    render(<Button text="Button Text" />);
    const buttonElement = screen.queryByText(/cats/i);
    expect(buttonElement).not.toBeInTheDocument();
  });
});
