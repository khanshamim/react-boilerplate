import { screen } from "@testing-library/react";
import Tile from "../../../src/components/tile/tile";
import { renderWithProviders } from "__tests__/testingUtils";

describe("Tile Component", () => {
  it("should have tile card only", () => {
    renderWithProviders(<Tile />);
    expect(screen.getByTestId("tileCard")).toBeInTheDocument();
    expect(screen.queryByTestId("tileHeading")).not.toBeInTheDocument();
    expect(screen.queryByTestId("tileContent")).toBeEmptyDOMElement();
  });

  it("should have tile icon only", () => {
    renderWithProviders(<Tile icon={<img alt="Tile Icon" />} />);
    expect(screen.queryByAltText("Tile Icon")).toBeInTheDocument();
  });

  it("should have tile heading only", () => {
    renderWithProviders(<Tile heading="Heading" />);
    expect(screen.queryByText("Heading")).toBeInTheDocument();
  });

  it("should have tile sub-heading only", () => {
    renderWithProviders(<Tile subHeading="Sub Heading" />);
    expect(screen.queryByText("Sub Heading")).toBeInTheDocument();
  });

  it("should have tile content only", () => {
    renderWithProviders(
      <Tile>
        <h1>Tile Content</h1>
      </Tile>
    );
    const tileContent = screen.queryByTestId("tileContent");
    expect(tileContent).toBeInTheDocument();
    expect(tileContent.innerHTML).toBe("<h1>Tile Content</h1>");
  });
});
