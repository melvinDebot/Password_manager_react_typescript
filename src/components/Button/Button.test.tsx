import Button from "./Button";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

describe("Button test", () => {
  test("should render with correct props types", () => {
    const props = {
      onClick: () => {},
      text: "Button text",
    }

    render(<Button {...props} />);
    expect(typeof props.onClick).toBe("function");
    expect(typeof props.text).toBe("string");
  });
});
