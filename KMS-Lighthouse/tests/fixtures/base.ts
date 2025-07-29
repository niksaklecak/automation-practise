import { test as base, expect } from "@playwright/test";
import { MainPage } from "../../pages/main-page";
import { BookDemoPage } from "../../pages/book-demo-page";
import { AccessibilityWidget } from "../../pages/accessibility-widget";

type MyFixtures = {
  mainPage: MainPage;
  bookDemoPage: BookDemoPage;
  accessibilityWidget: AccessibilityWidget;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(mainPage.bookADemoLink).toBeVisible({ timeout: 5000 });
    await use(mainPage);
  },

  bookDemoPage: async ({ mainPage, page }, use) => {
    await mainPage.bookADemoLink.click();
    await page.waitForURL("**/book-a-demo/", { timeout: 10000 });
    await use(new BookDemoPage(page));
  },

  accessibilityWidget: async ({ mainPage, page }, use) => {
    const accessibilityWidget = new AccessibilityWidget(page);
    await mainPage.accessibilityWidgetLink.click();
    await expect(accessibilityWidget.accessibilityToolbarLabel).toBeVisible();
    await use(accessibilityWidget);
  },
});

export { expect } from "@playwright/test";
