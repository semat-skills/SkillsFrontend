import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

type HeaderProps = {
  headerOf: string;
};

const MochHeader: React.FC<HeaderProps> = ({ headerOf }) => {
  return (
    <BrowserRouter>
      <Header headerOf={headerOf} />
    </BrowserRouter>
  );
};

describe("Header", () => {
  it("should render text of logo",
   () => {
    render(<MochHeader headerOf="Home" />);
    const headingElements = screen.getByText(/hiker/i);
    expect(headingElements).toBeInTheDocument();
  });

  it("should check if text return true",
   () => {
    render(<MochHeader headerOf="Home" />);
    const headingElements = screen.getByText(/hiker/i);
    expect(headingElements).toBeTruthy();
  });

  it("should check if logo text is visible",
   () => {
    render(<MochHeader headerOf="Home" />);
    const headingElements = screen.getByText(/Hiker/i);
    expect(headingElements).toBeVisible();
  });
});
