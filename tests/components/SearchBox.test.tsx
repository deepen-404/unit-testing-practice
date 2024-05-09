import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", async () => {
  const renderSearchBox = () => {
    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} />);
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();

    return { input, onChange, user };
  };

  it("should render an input field for searching", () => {
    const { input } = renderSearchBox();
    expect(input).toBeInTheDocument();
  });

  it("should call the onchange when enter is pressed", async () => {
    const { user, input, onChange } = renderSearchBox();

    const searchTerm = "deepen";

    await user.type(input, searchTerm + "{enter}");
    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it("should not call the onchange when enter is pressed", async () => {
    const { user, input, onChange } = renderSearchBox();

    await user.type(input, "{enter}");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should call the onchange when enter is pressed", async () => {
    const { user, input, onChange } = renderSearchBox();

    const searchTerm = "deepen";

    await user.type(input, searchTerm + "{enter}");
    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });
});
