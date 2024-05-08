import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

// try commenting out the code that makes your test pass
// it makes the tests more robust

describe("UserAccount", () => {
  const user: User = { id: 1, name: "deepen" };
  it("should render the username", () => {
    const { debug } = render(<UserAccount user={user} />);

    expect(screen.getByText("Name:")).toBeInTheDocument();

    debug();
  });

  // use queryByRole when the element might not exist in the dom

  it("should not render the edit button if admin is not provided", () => {
    const { debug } = render(<UserAccount user={{ ...user }} />);

    const editButton = screen.queryByRole("button");
    expect(editButton).not.toBeInTheDocument();

    debug();
  });

  it("should render the edit button if admin is provided,", () => {
    const { debug } = render(<UserAccount user={{ ...user, isAdmin: true }} />);

    const editButton = screen.getByRole("button");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);

    debug();
  });
});
