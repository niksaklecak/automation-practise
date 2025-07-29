import { test, expect } from "../../tests/fixtures/base";

test.describe("Accessibility Widget", () => {
  test("all tools are visible", async ({ accessibilityWidgetPage }) => {
    await expect(accessibilityWidgetPage.accessibilityToolbar).toBeVisible();
    await expect(accessibilityWidgetPage.keyboardNavigationToggle).toBeVisible();
    await expect(accessibilityWidgetPage.disableAnimationsToggle).toBeVisible();
    await expect(accessibilityWidgetPage.contrastToggle).toBeVisible();
    await expect(accessibilityWidgetPage.increaseTextButton).toBeVisible();
    await expect(accessibilityWidgetPage.decreaseTextButton).toBeVisible();
    await expect(accessibilityWidgetPage.readableFontToggle).toBeVisible();
    await expect(accessibilityWidgetPage.markTitlesToggle).toBeVisible();
    await expect(accessibilityWidgetPage.highlightLinksAndButtonsToggle).toBeVisible();
  });

  test.fixme("should open and close the accessibility widget", async () => {});
  test.fixme("toggles should work correctly", async () => {});
});
