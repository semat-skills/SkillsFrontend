import { render, screen } from "@testing-library/react";
import { CardComp } from "../Card";

describe("Card", () => {
  it("should render same title passed into title prop", () => {
    render(<CardComp img="" title="Trail" text="" />);
    const cardElement = screen.getByText(/Trail/i);
    expect(cardElement).toBeInTheDocument();
  });

  it("should render same text passed into text prop", () => {
    render(<CardComp img="" title="" text="My Card Text" />);
    const cardElement = screen.getByText(/My Card Text/i);
    expect(cardElement).toBeInTheDocument();
  });
});
