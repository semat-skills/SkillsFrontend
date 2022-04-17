import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Intro from "../IntroSection";

const MockIntro = () => {
  return (
    <BrowserRouter>
      <Intro />
    </BrowserRouter>
  );
};

describe("IntroSection", () => {
  it("should render same text passed into text prop", async () => {
    render(<MockIntro />);
    const introElement = screen.getByRole("button");
    expect(introElement).toBeInTheDocument();
  });

  it("should render same text on button", async () => {
    render(<MockIntro />);
    const introElement = screen.getByRole("button");
    expect(introElement).toHaveTextContent("Get Started");
  });

  it("should render same text of hiker", async () => {
    render(<MockIntro />);
    const introElement = screen.getByText("Hiker");
    expect(introElement).toBeInTheDocument();
  });

  it("should render same text of big title", async () => {
    render(<MockIntro />);
    const introElement = screen.getByText("Start Your Trail");
    expect(introElement).toBeInTheDocument();
  });
});
