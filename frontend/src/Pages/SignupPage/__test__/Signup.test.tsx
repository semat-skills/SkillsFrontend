import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/index";
import { Signup } from "../Signup";

const MockSignup = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
};

describe("Login", () => {
  it("should render the form", async () => {
    render(<MockSignup />);
    const loginElement = screen.getByTestId("signupForm");
    expect(loginElement).toBeInTheDocument();
  });

  it("should render the imgs", async () => {
    render(<MockSignup />);
    const loginElement = screen.getByTestId("patterns");
    expect(loginElement).toBeInTheDocument();
  });
});
