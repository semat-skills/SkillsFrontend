import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import LoginForm from "../FormikLogin";

const MockForm = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm />
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
});
