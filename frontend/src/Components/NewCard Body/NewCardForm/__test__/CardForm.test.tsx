import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../../store/index";
import NewCardForm from "../CardForm";

const MockCardForm = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NewCardForm />
      </BrowserRouter>
    </Provider>
  );
};

describe("CardForm", () => {
  it("should render Card Content", async () => {
    render(<MockCardForm />);
    const formElement = screen.getByText("Card Content");
    expect(formElement).toBeInTheDocument();
  });

  it("should render Card Name", async () => {
    render(<MockCardForm />);
    const formElement = screen.getByText("Card Name");
    expect(formElement).toBeInTheDocument();
  });

  it("should check if the p element exists", async () => {
    render(<MockCardForm />);
    const formElement = screen.getByTestId("form");
    expect(formElement).toContainHTML("p");
  });

  it("should check if only one button exists", async () => {
    render(<MockCardForm />);
    const formElement = screen.getAllByRole("button");
    expect(formElement.length).toBe(1);
  });
});
