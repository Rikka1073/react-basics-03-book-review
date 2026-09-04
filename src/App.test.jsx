import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("ページタイトルがあること", () => {
  const { getByText } = render(<App />);

  expect(getByText("ユーザーログイン")).toBeInTheDocument();
});
