import { test, expect } from "../fixtures/base";

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

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Accessibility Widget - toggles should work correctly", () => {
  test.skip("keyboard navigation toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.keyboardNavigationToggle.click();
  });

  test.skip("disable animations toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.disableAnimationsToggle.click();
  });

  test("contrast toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.contrastToggle.click();
  });

  test("increase text size toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.increaseTextButton.click();
  });

  test("decrease text size toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.decreaseTextButton.click();
  });

  test("readable font toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.readableFontToggle.click();
  });

  test("mark titles toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.markTitlesToggle.click();
  });

  test("highlight links and buttons toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.highlightLinksAndButtonsToggle.click();
  });

  test("close toolbar button should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.closeToolbarButton.click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
