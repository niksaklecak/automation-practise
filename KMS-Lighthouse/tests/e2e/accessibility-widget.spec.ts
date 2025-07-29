import { test, expect } from "../../tests/fixtures/base";

test.describe("Accessibility Widget", () => {
  test("all tools are visible", async ({ accessibilityWidget }) => {
    await expect(accessibilityWidget.accessibilityToolbar).toBeVisible();
    await expect(accessibilityWidget.closeToolbarButton).toBeVisible();
    await expect(accessibilityWidget.keyboardNavigationToggle).toBeVisible();
    await expect(accessibilityWidget.disableAnimationsToggle).toBeVisible();
    await expect(accessibilityWidget.contrastToggle).toBeVisible();
    await expect(accessibilityWidget.increaseTextButton).toBeVisible();
    await expect(accessibilityWidget.decreaseTextButton).toBeVisible();
    await expect(accessibilityWidget.readableFontToggle).toBeVisible();
    await expect(accessibilityWidget.markTitlesToggle).toBeVisible();
    await expect(accessibilityWidget.highlightLinksAndButtonsToggle).toBeVisible();
  });

  test.fixme("should open and close the accessibility widget", async () => {});
  test.fixme("toggles should work correctly", async ({ accessibilityWidget }) => {
    // TODO: Implement this test
    await accessibilityWidget.keyboardNavigationToggle.click();
    //expect to use the keyboard - check the
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
