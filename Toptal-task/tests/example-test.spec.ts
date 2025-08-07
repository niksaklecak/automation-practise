import { test, expect } from "@playwright/test";
import { Utils } from "../helpers/utils";

test("example test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Google");
});

test("task", async ({ page }) => {
  const result = await Utils.exampleMethod();
  console.log(result);
});
