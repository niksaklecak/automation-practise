import { test as base, expect } from "@playwright/test";
import { MainPage } from "../../pages/main-page";
import { BookDemoPage } from "../../pages/book-demo-page";
import { AccessibilityWidget } from "../../pages/accessibility-widget";
import { TermsAndPrivacyPolicyPage } from "../../pages/terms-and-conditions-page";

type MyFixtures = {
  mainPage: MainPage;
  bookDemoPage: BookDemoPage;
  accessibilityWidget: AccessibilityWidget;
  termsAndPrivacyPolicyPage: TermsAndPrivacyPolicyPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(mainPage.bookADemoLink).toBeVisible({ timeout: 5000 });
    await use(mainPage);
  },

  bookDemoPage: async ({ page }, use) => {
    const bookDemoPage = new BookDemoPage(page);
    await bookDemoPage.open();
    await page.waitForURL("**/book-a-demo/", { timeout: 6000 });
    await use(bookDemoPage);
  },

  accessibilityWidget: async ({ mainPage, page }, use) => {
    const accessibilityWidget = new AccessibilityWidget(page);
    await mainPage.accessibilityWidgetLink.click();
    await expect(accessibilityWidget.accessibilityToolbarLabel).toBeVisible();
    await use(accessibilityWidget);
  },

  termsAndPrivacyPolicyPage: async ({ page }, use) => {
    const termsAndPrivacyPolicyPage = new TermsAndPrivacyPolicyPage(page);
    await termsAndPrivacyPolicyPage.open();
    await page.waitForURL("**/terms-and-privacy-policy/");
    await use(termsAndPrivacyPolicyPage);
  },
});

export { expect } from "@playwright/test";
