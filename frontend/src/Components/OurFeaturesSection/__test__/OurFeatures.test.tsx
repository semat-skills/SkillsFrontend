import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import { OurFeatures } from "../OurFeatures";

const MockFeatures = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <OurFeatures />
      </BrowserRouter>
    </Provider>
  );
};

describe("InspirationSection", () => {
  it("should render section title", () => {
    render(<MockFeatures />);
    const featureElement = screen.getByText("Our Features");
    expect(featureElement).toBeInTheDocument();
  });

  it("should render stories", () => {
    render(<MockFeatures />);
    const featureElement = screen.getByTestId("stories");
    expect(featureElement).toBeInTheDocument();
  });
});
