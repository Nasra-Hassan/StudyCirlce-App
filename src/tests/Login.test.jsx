import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";

test("renders login button", () => {

  render(<Login />);

  expect(
    screen.getByText(/Sign in with Google/i)
  ).toBeInTheDocument();

});