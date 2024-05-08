import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("it should render the name when the name is provided", () => {
    const { debug } = render(<Greet name="Deepen" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    // using regex to make test more robust and /i to ignore case
    expect(heading).toHaveTextContent(/deepen/i);
    debug();
  });

  it("it should render login button when the name is not provided", () => {
    const { debug } = render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
    debug();
  });
});
