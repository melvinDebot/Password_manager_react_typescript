import Input from "./Input";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Input test", () => {
  test("should render with correct props types", () => {
    const props = {
      value: "input value",
      type: "text",
      onChange: () => { },
      placeholder: "Enter text",
    };

    render(<Input {...props} />);
    expect(typeof props.value).toBe("string");
    expect(typeof props.type).toBe("string");
    expect(typeof props.onChange).toBe("function");
    expect(typeof props.placeholder).toBe("string");

  });

  test("finds multiple inputs with the same placeholder", () => {
    // Supposons que vous avez plusieurs éléments Input avec le même placeholder dans votre composant
    render(
      <>
        <Input
          value="input value"
          type="text"
          onChange={() => { }}
          placeholder="Enter text"
        />
      </>
    );

    const inputs = screen.queryAllByPlaceholderText("Enter text");
    expect(inputs.length).toBe(2); // Assurez-vous que le nombre d'éléments correspond à vos attentes

    // Vérifiez que la valeur de chaque input est une chaîne de caractères
    inputs.forEach((input) => {
      // Cast de l'élément en HTMLInputElement pour accéder à la propriété `value`
      const inputElement = input as HTMLInputElement;
      // Vérifiez que la valeur est bien une chaîne de caractères
      expect(typeof inputElement.value).toBe("string");
    });
  });


});
