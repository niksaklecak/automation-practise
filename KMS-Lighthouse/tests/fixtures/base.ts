import { test as base } from "@playwright/test";
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
    await use(mainPage);
  },

  bookDemoPage: async ({ mainPage, page }, use) => {
    await mainPage.bookADemoLink.click();
    await use(new BookDemoPage(page));
  },

  accessibilityWidget: async ({ mainPage, page }, use) => {
    await mainPage.accessibilityWidgetLink.click();
    await use(new AccessibilityWidget(page));
  },
});

export { expect } from "@playwright/test";
