import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input", () => {
  it("should be able to type into input - rerender", () => {
    const { rerender } = render(
      <Input
        label="Email"
        inputId="email"
        inputName="email"
        inputType="email"
        placeholder="Email"
        onChange={(e) => e.target.value}
        className={`input-text form-control`}
        inputErrors={"false"}
      />
    );

    rerender(
      <Input
        label="Email"
        inputId="email"
        inputName="email"
        inputType="email"
        placeholder="Email"
        onChange={(e) => e.target.value}
        className={`input-text form-control`}
        inputErrors={"false"}
      />
    );
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputElement, { target: { value: "test@asd.com" } });
    expect(inputElement.value).toBe("test@asd.com");
  });
});
