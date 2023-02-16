import { screen, fireEvent, waitFor } from "@testing-library/react";
import AppBar from "../../../src/components/appBar/appBar";
import { renderWithProviders } from "__tests__/testingUtils";

describe("App Bar light mode", () => {
  beforeEach(() => {
    renderWithProviders(<AppBar mode="light" />);
  });

  it("should have component rendered with default theme", () => {
    expect(screen.getByTestId("appBarBox")).toBeInTheDocument();
  });

  it("should open profile menus for both desktop and mobile", () => {
    fireEvent.click(screen.getByTestId("btnProfile"));
    expect(screen.getByTestId("desktopMenu")).toBeInTheDocument();
    expect(screen.getByTestId("desktopProfileMenu")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("desktopProfileMenu"));
    fireEvent.click(screen.getByTestId("btnMobileMenu"));
  });

  it("should open product center sub menus from desktop view", () => {
    fireEvent.click(screen.getByText("Product Center"));
    expect(screen.getByText("Product List")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Product List"));
    waitFor(() => expect(screen.getByText("Product List")).toBeInTheDocument());
  });

  it("should open/close side drawer", () => {
    fireEvent.click(screen.getByTestId("sideDrawerIcon"));
    waitFor(() => expect(screen.getByTestId("sideDrawerMenu")).toBeInTheDocument());

    // click on product center menu.
    const mainMenus = screen.getAllByTestId("btnMainMenu");
    fireEvent.click(mainMenus[1]);

    // should have product center sub menus.
    expect(screen.queryByText("Product List")).toBeInTheDocument();

    // should click sub menu from side drawer.
    fireEvent.click(screen.queryByText("Product List"));
    // should close sub menu.
    waitFor(() => expect(screen.queryByText("Product List")).not.toBeInTheDocument());

    // should close side drawer.
    waitFor(() => expect(screen.getByTestId("sideDrawerMenu")).not.toBeInTheDocument());
  });

  it("should click on dashboard menu that has no sub menu", () => {
    const mainMenus = screen.getAllByTestId("btnMainMenu");
    fireEvent.click(mainMenus[0]);
    expect(screen.queryByText("Product List")).toBeNull();
  });

  it("should click on product center menu that has sub menus", () => {
    const mainMenus = screen.getAllByTestId("btnMainMenu");
    fireEvent.click(mainMenus[1]);
    expect(screen.queryByText("Product List")).toBeInTheDocument();
    fireEvent.click(screen.queryByText("Product List"));
    waitFor(() => expect(screen.queryByText("Product List")).not.toBeInTheDocument());
  });
});

describe("App Bar dark mode", () => {
  it("should have component rendered with default theme", () => {
    renderWithProviders(<AppBar mode="dark" />);
    expect(screen.getByTestId("appBarBox")).toBeDefined();
  });
});
