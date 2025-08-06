import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blog from "../data/blog";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders blog name and about text from props", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: blog.name })).toBeInTheDocument();
  expect(screen.getByText(blog.about)).toBeInTheDocument();
});

test("renders preview text from first article", () => {
  render(<App />);
  expect(screen.getByText(blog.posts[0].preview)).toBeInTheDocument();
});