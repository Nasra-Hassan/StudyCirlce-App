import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

test("renders StudyCircle heading", () => {

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/StudyCircle/i)
  ).toBeInTheDocument();

});