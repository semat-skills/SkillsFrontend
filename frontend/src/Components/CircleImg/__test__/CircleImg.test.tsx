import { render, screen } from "@testing-library/react";
import { CircleImg } from "../CircleImg";

describe("CircleImg", () => {
  it("should render the Circle Img", async () => {
    render(<CircleImg imgUrl="" />);
    const circleElement = screen.getByTestId("circleImg");
    expect(circleElement).toBeInTheDocument();
  });

  it("should have round styling", async () => {
    render(<CircleImg imgUrl="" />);
    const circleElement = screen.getByTestId("circleImg");
    expect(circleElement).toHaveStyle(" border-radius: 50%;");
  });

  it("should cover the background", async () => {
    render(<CircleImg imgUrl="" />);
    const circleElement = screen.getByTestId("circleImg");
    expect(circleElement).toHaveStyle("background-size: cover;");
  });
});
