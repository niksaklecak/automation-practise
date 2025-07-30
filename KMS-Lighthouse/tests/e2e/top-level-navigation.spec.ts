import { test, expect } from "../fixtures/base";

test.describe("Test top level navigation - our solutions submenu", () => {
  test.fixme("hover on 'Our Solution' should open submenu with animation", async ({ mainPage }) => {
    await mainPage.ourSolutionsLink.hover();
    const initialDuration = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).transitionDuration;
    });
    await expect(initialDuration).toContain("0.3s");

    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();
  });

  test("click outside 'Our Solution' submenu closes it", async ({ mainPage }) => {
    await mainPage.ourSolutionsLink.click();
    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();

    await mainPage.howWeCanHelpTodayImg.click();

    await expect(mainPage.ourSolutionsSubmenuPanel).toBeHidden();
  });

  test("submenu stays open when scrolling down", async ({ mainPage, page }) => {
    await mainPage.ourSolutionsLink.click();
    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();

    await page.mouse.wheel(0, 1500);

    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();
  });

  test("click on 'Our Solution' should open submenu with animation", async ({ mainPage }) => {
    await mainPage.ourSolutionsLink.click();
    const initialDuration = await mainPage.ourSolutionsSubmenuPanel.evaluate((el) => {
      return window.getComputedStyle(el).transitionDuration;
    });
    await expect(initialDuration).toContain("0.3s");

    await expect(mainPage.ourSolutionsSubmenuPanel).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
