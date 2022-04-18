import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import SignupForm from "../FormikSignup";

const MockForm = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SignupForm />
      </BrowserRouter>
    </Provider>
  );
};

describe("Form", () => {
  it("should render Hiker in h2", () => {
    render(<MockForm />);
    const formElement = screen.getByRole("heading");
    expect(formElement).toHaveTextContent("Hiker");
  });

  it("should show hiker in strong", () => {
    render(<MockForm />);
    const formElement = screen.getByRole("heading");
    expect(formElement).toContainHTML("strong");
  });

  it("should check if the p element exists", () => {
    render(<MockForm />);
    const formElement = screen.getByTestId("form");
    expect(formElement).toContainHTML("p");
  });

  it("should check if only one button exists", () => {
    render(<MockForm />);
    const formElement = screen.getAllByRole("button");
    expect(formElement.length).toBe(1);
  });

  it("should check the number of text inputs", () => {
    render(<MockForm />);
    const formElement = screen.getAllByRole("textbox");
    expect(formElement.length).toBe(2);
  });
});
