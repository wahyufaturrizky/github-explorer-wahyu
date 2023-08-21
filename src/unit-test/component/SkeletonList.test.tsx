import { render, screen } from "@testing-library/react";
import SkeletonList from "../../component/SkeletonList";

describe("Skeleton list component", () => {
  it("renders skeleton list correctly", () => {
    render(<SkeletonList />);
    const linkElement = screen.getByTestId("skeleton-list");
    expect(linkElement).toBeInTheDocument();
  });
});
