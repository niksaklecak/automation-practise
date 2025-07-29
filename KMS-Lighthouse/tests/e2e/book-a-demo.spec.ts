import { test, expect } from "../../tests/fixtures/base";

test.describe("Book a Demo", () => {
  test("navigation link works", async ({ mainPage, bookDemoPage, page }) => {
    await mainPage.navigation.clickBookADemo();
    await page.waitForURL("https://kmslh.com/book-a-demo/", { timeout: 6000 });

    await expect(bookDemoPage.bookADemoButton).toBeVisible();
  });

  test("all form fields are present", async ({ mainPage, bookDemoPage, page }) => {
    await mainPage.navigation.clickBookADemo();
    await page.waitForURL("https://kmslh.com/book-a-demo/", { timeout: 6000 });

    await expect(bookDemoPage.bookADemoButton).toBeVisible();
    await expect(bookDemoPage.firstNameInput).toBeVisible();
    await expect(bookDemoPage.lastNameInput).toBeVisible();
    await expect(bookDemoPage.professionalEmailInput).toBeVisible();
    await expect(bookDemoPage.phoneNumberInput).toBeVisible();
    await expect(bookDemoPage.countryRegionDropdown).toBeVisible();
    await expect(bookDemoPage.messageTextarea).toBeVisible();
    await expect(bookDemoPage.bookADemoButton).toBeVisible();
  });

  test.fixme("form validation works correctly", async () => {});
});
