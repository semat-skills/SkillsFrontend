import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/index";
import { Login } from "../Login";

const MockLogin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
};

describe("Login", () => {
  it("should render the form", async () => {
    render(<MockLogin />);
    const loginElement = screen.getByTestId("loginForm");
    expect(loginElement).toBeInTheDocument();
  });

  it("should render the imgs", async () => {
    render(<MockLogin />);
    const loginElement = screen.getByTestId("patterns");
    expect(loginElement).toBeInTheDocument();
  });
});
