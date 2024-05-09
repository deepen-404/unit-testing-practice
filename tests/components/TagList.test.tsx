import { render, screen } from "@testing-library/react";
import TagList from "../../src/components/TagList";

describe("TagList", () => {
  it("should render tags", async () => {
    render(<TagList />);

    // keeps calling the callback every 15ms,
    // the timeout is 1s
    // await waitFor(() => {
    //   const listItems = screen.getAllByRole("listitem");
    //   expect(listItems.length).toBeGreaterThan(0);
    // });

    // this is the same implementation as the above code
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
