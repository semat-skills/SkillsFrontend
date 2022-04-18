import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FunctionalBody } from "../FunctionalBody";
import store from "../../../store";

const MockFunctional = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FunctionalBody />
      </BrowserRouter>
    </Provider>
  );
};
describe("Functional Body", () => {
  it("should render same text passed into button props", () => {
    render(<MockFunctional />);
    const buttonElement = screen.getByText("Add New Item");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same text in the page", () => {
    render(<MockFunctional />);
    const functionalElement = screen.getByText("Hikes Gallary");
    expect(functionalElement).toBeInTheDocument();
  });
});
