import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when the user array is not provided", () => {
    const { debug } = render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();

    debug();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Deepen" },
      { id: 2, name: "Deepen two" },
    ];
    const { debug } = render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", {
        name: user.name,
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });

    debug();
  });
});
