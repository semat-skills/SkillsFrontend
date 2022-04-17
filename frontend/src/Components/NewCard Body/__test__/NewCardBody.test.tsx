import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NewCardBody } from "../NewCardBody";

const Mochcard = () => {
  return (
    <BrowserRouter>
      <NewCardBody />
    </BrowserRouter>
  );
};

describe("CardBody", () => {
  it("should render the component", async () => {
    render(<Mochcard />);
    const cardElements = screen.getByTestId("cardbody");
    expect(cardElements).not.toBeFalsy();
  });

  it("should render same text", async () => {
    render(<Mochcard />);
    const cardElements = screen.getByText("Add New Card");
    expect(cardElements).toBeInTheDocument();
  });

  it("should render form", async () => {
    render(<Mochcard />);
    const cardElements = screen.getByTestId("cardForm");
    expect(cardElements).toBeInTheDocument();
  });
});
