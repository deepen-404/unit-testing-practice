import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByRole("checkbox");
    const heading = screen.getByRole("heading");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    return { checkbox, heading, submitButton };
  };
  it("should render with correct text and inital state", () => {
    const { checkbox, heading, submitButton } = renderComponent();

    expect(heading).toHaveTextContent(/terms & conditions/i);
    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked ", async () => {
    const { checkbox, submitButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(checkbox);
    expect(submitButton).toBeEnabled();
  });
});
