import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../../store/index";
import { Stories } from "../Stories";

const MockStories = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Stories />
      </BrowserRouter>
    </Provider>
  );
};

describe("Stories", () => {
  it("should check number of stories", async () => {
    render(<MockStories />);
    const storyElement = screen.getAllByTestId("story");
    expect(storyElement.length).toBe(4);
  });
});
