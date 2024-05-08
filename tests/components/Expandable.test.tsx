import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(256);
  const truncatedText = longText.substring(0, limit) + "...";

  it("should render the full text if less than 255 char", () => {
    const propText = "characters";
    render(<ExpandableText text={propText} />);
    expect(screen.getByRole("article")).toHaveTextContent(propText);
  });

  it("should truncate text if more than 255 char", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByRole("article")).toHaveTextContent(truncatedText);
    expect(screen.getByRole("button", { name: /show more/i }));
  });

  it("should expand text when show more button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText));

    const showMoreButton = screen.getByRole("button", { name: /show more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    expect(screen.getByText(longText));
    expect(
      screen.getByRole("button", { name: /show less/i })
    ).toBeInTheDocument();
  });

  it("should collapse text when show less button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole("button", { name: /show more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", { name: /show less/i });
    await user.click(showLessButton);

    expect(screen.getByText(truncatedText));
  });
});
