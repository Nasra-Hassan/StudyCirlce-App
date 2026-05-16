import { render, screen } from "@testing-library/react";

import Groups from "../pages/Groups";

test("renders groups heading", () => {

  render(<Groups />);

  expect(
    screen.getByText(/Study Groups/i)
  ).toBeInTheDocument();

});