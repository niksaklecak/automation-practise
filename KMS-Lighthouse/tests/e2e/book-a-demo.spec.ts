import { test, expect } from "../../tests/fixtures/base";

test.describe("Book a Demo", () => {
  test("Verify navigation link works", async ({ bookDemoPage, page }) => {
    await page.waitForURL("https://kmslh.com/book-a-demo/", { timeout: 6000 });

    await expect(bookDemoPage.bookADemoButton).toBeVisible();
  });

  test("Verify all form fields are present", async ({ bookDemoPage, page }) => {
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

  test.fixme("Verify form validation works correctly", async () => {});

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
