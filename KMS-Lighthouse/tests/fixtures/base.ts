import { test as base } from "@playwright/test";
import { MainPage } from "../../pages/main-page";
import { BookDemoPage } from "../../pages/book-demo-page";
import { AccessibilityWidgetPage } from "../../pages/accessibility-widget";

type MyFixtures = {
  mainPage: MainPage;
  bookDemoPage: BookDemoPage;
  accessibilityWidgetPage: AccessibilityWidgetPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await use(mainPage);

    await page.close();
  },

  bookDemoPage: async ({ page }, use) => {
    await use(new BookDemoPage(page));
  },

  accessibilityWidgetPage: async ({ page }, use) => {
    await use(new AccessibilityWidgetPage(page));
  },
});

export { expect } from "@playwright/test";
