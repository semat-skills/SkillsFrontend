import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import { Inspiration } from "../InspirationSection";

const MockInspiration = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Inspiration />
      </BrowserRouter>
    </Provider>
  );
};

describe("InspirationSection", () => {
  it("should render section title", async () => {
    render(<MockInspiration />);
    const insprElement = screen.getByText("Hikes of The Week");
    expect(insprElement).toBeInTheDocument();
  });

  it("should check scroller buttons", async () => {
    render(<MockInspiration />);
    const insprElement = screen.getByTestId("scrollButton");
    expect(insprElement).toHaveStyle("border-radius: 50%;");
  });
});
