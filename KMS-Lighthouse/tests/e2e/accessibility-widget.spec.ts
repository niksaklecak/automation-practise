import { test, expect } from "../fixtures/base";

test.describe("Accessibility Widget", () => {
  test("all tools are visible", async ({ accessibilityWidget }) => {
    await expect(accessibilityWidget.accessibilityToolbarLabel).toBeVisible();
    await expect(accessibilityWidget.closeAccessibilityToolbarButton).toBeVisible();
    await expect(accessibilityWidget.keyboardNavigationToggle).toBeVisible();
    await expect(accessibilityWidget.disableAnimationsToggle).toBeVisible();
    await expect(accessibilityWidget.contrastToggle).toBeVisible();
    await expect(accessibilityWidget.increaseTextToggle).toBeVisible();
    await expect(accessibilityWidget.decreaseTextToggle).toBeVisible();
    await expect(accessibilityWidget.readableFontToggle).toBeVisible();
    await expect(accessibilityWidget.markTitlesToggle).toBeVisible();
    await expect(accessibilityWidget.highlightLinksAndButtonsToggle).toBeVisible();
  });

  test.fixme("should open and close the accessibility widget", async () => {});

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("Accessibility Widget - toggles should work correctly @e2e", () => {
  test("keyboard navigation toggle should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.keyboardNavigationToggle.click();
    await expect(accessibilityWidget.keyboardNavigationToggle).toBeFocused();
    await accessibilityWidget.page.keyboard.press("Tab");
    await expect(accessibilityWidget.disableAnimationsToggle).toBeFocused();
  });

  test("Verify disable animations toggle should work correctly", async ({ mainPage, accessibilityWidget }) => {
    expect(accessibilityWidget.disableAnimationsToggle).not.toBeChecked();
    await accessibilityWidget.closeAccessibilityToolbarButton.click();

    await expect(mainPage.ourSolutionsSubmenuPanel).toBeHidden();
    const initialTransformDuration = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).transitionDuration;
    });
    expect(initialTransformDuration).toBe("0.3s, 0.3s");

    await mainPage.accessibilityWidgetLink.click();
    await accessibilityWidget.disableAnimationsToggle.click();
    await accessibilityWidget.closeAccessibilityToolbarButton.click();

    await mainPage.ourSolutionsLink.hover();
    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();
    const finalTransformDuration = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).transitionDuration;
    });
    expect(finalTransformDuration).toBe("0s");
  });

  test("Verify contrast toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.contrastToggle).not.toBeChecked();
    await accessibilityWidget.closeAccessibilityToolbarButton.click();

    await mainPage.ourSolutionsLink.hover();
    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();

    const initialBackgroundColor = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(initialBackgroundColor).toBe("rgb(255, 255, 255)");

    await mainPage.accessibilityWidgetLink.click();
    await accessibilityWidget.contrastToggle.click();
    await accessibilityWidget.closeAccessibilityToolbarButton.click();

    const newBackgroundColor = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(newBackgroundColor).not.toEqual(initialBackgroundColor);
    expect(newBackgroundColor).toBe("rgb(0, 0, 0)");
  });

  test("Verify increase text size toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.increaseTextToggle).not.toBeChecked();

    const initialFontSize = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    expect(initialFontSize).toBe("24px");

    await accessibilityWidget.increaseTextToggle.click();

    const newFontSize = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    expect(parseFloat(newFontSize)).toBeGreaterThan(parseFloat(initialFontSize));
    expect(newFontSize).toBe("38.4px");
  });

  test("Verify decrease text size toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.decreaseTextToggle).not.toBeChecked();

    const initialFontSize = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    expect(initialFontSize).toBe("24px");

    await accessibilityWidget.decreaseTextToggle.click();

    const newFontSize = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    expect(parseFloat(newFontSize)).toBeLessThan(parseFloat(initialFontSize));
    expect(newFontSize).toBe("19.2px");
  });

  test("Verify readable font toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.readableFontToggle).not.toBeChecked();

    const initialFontFamily = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });

    expect(initialFontFamily).toBe('"DM Sans", sans-serif');

    await accessibilityWidget.readableFontToggle.click();

    const newFontFamily = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });

    expect(initialFontFamily).not.toEqual(newFontFamily);
    expect(newFontFamily).toBe("Arial, sans-serif");
  });

  test("Verify mark titles toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.markTitlesToggle).not.toBeChecked();

    const initialBackgroundColor = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(initialBackgroundColor).toBe("rgba(0, 0, 0, 0)");

    await accessibilityWidget.markTitlesToggle.click();

    const newBackgroundColor = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(initialBackgroundColor).not.toEqual(newBackgroundColor);
    expect(newBackgroundColor).toBe("rgb(255, 255, 0)");
  });

  test("Verify highlight links and buttons toggle should work correctly", async ({ accessibilityWidget, mainPage }) => {
    expect(accessibilityWidget.highlightLinksAndButtonsToggle).not.toBeChecked();

    const initialLabelBackgroundColor = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    const initialLinkBackgroundColor = await accessibilityWidget.closeAccessibilityToolbarButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(initialLabelBackgroundColor).toBe("rgba(0, 0, 0, 0)");
    expect(initialLinkBackgroundColor).toBe("rgba(0, 0, 0, 0)");

    await accessibilityWidget.highlightLinksAndButtonsToggle.click();

    const newLabelBackgroundColor = await accessibilityWidget.accessibilityToolbarLabel.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    const newLinkBackgroundColor = await accessibilityWidget.closeAccessibilityToolbarButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(newLabelBackgroundColor).toEqual(initialLabelBackgroundColor);
    expect(newLabelBackgroundColor).toBe("rgba(0, 0, 0, 0)");
    expect(newLinkBackgroundColor).not.toEqual(initialLinkBackgroundColor);
    expect(newLinkBackgroundColor).toBe("rgba(255, 233, 1, 0.07)");
  });

  test("Verify close toolbar button should work correctly", async ({ accessibilityWidget }) => {
    await accessibilityWidget.closeAccessibilityToolbarButton.click();
    await expect(accessibilityWidget.accessibilityToolbarLabel).toBeHidden();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
